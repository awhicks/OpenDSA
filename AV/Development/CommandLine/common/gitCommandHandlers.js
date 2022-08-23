import { FILE_STATE, GIT_STATE } from "./gitStatuses.js";

const handle_git = (gitCommandsMap) => (args) => {
  if (gitCommandsMap[args[0]]) {
    return gitCommandsMap[args[0]](args.slice(1));
  } else {
    return `git ${args[0]} not supported`;
  }
};

const handle_clone = () => (args) => {
  return "clone";
};

const handle_add =
  (getSvgData, getCurrDir, setCurrDir, getHomeDir) => (args) => {
    let notFound = [];
    args.forEach((path) => {
      const fileSystemEntity = getCurrDir().getChildByPath(path);

      if (fileSystemEntity) {
        fileSystemEntity.setStateConditional(
          GIT_STATE.CHANGED,
          GIT_STATE.ADDED
        );
      } else {
        notFound.push(path);
      }
    });
    return notFound.length === 0 ? "" : "Not found: " + notFound.join(", ");
  };

const handle_restore =
  (getSvgData, getCurrDir, setCurrDir, getHomeDir) => (args) => {
    let notFound = [];

    let isStaged = false;
    if (args.length > 0 && args[0] === "--staged") {
      isStaged = true;
      args = args.slice(1);
    }

    args.forEach((path) => {
      const fileSystemEntity = getCurrDir().getChildByPath(path);

      if (fileSystemEntity) {
        if (isStaged) {
          fileSystemEntity.setStateConditional(
            GIT_STATE.ADDED,
            GIT_STATE.CHANGED
          );
        } else {
          //TODO restore new files
          fileSystemEntity.setStateConditional(
            GIT_STATE.CHANGED,
            GIT_STATE.MERGED,
            null,
            FILE_STATE.UNCHANGED
          );
        }
      } else {
        notFound.push(path);
      }
    });
    return notFound.length === 0 ? "" : "Not found: " + notFound.join(", ");
  };

const handle_commit =
  (getSvgData, getCurrDir, setCurrDir, getHomeDir, gitMethods) => (args) => {
    const files = getHomeDir().getByState(GIT_STATE.ADDED);
    if (files.length > 0) {
      const commit = gitMethods.getLocalCurrBranch().commitChanges(files);
      getHomeDir().setStateConditional(GIT_STATE.ADDED, GIT_STATE.COMMITTED);
      return "";
    } else {
      return "nothing to commit";
    }
  };

const handle_pull = () => (args) => {
  return "pull";
};

const handle_push = () => (args) => {
  return "push";
};

const handle_branch = () => (args) => {
  return "branch";
};

const handle_checkout = () => (args) => {
  return "checkout";
};

const handle_status =
  (getSvgData, getCurrDir, setCurrDir, getHomeDir, gitMethods) => (args) => {
    const output = [];

    const branchInfo = `<div class="git-status-branch"><p>On branch ${
      gitMethods.getLocalCurrBranch().name
    }</p><p>Your branch is up to date with 'origin/main'.</p></div>`;

    const createStatusSection = (
      title,
      className,
      gitState,
      fileStates,
      hideStates
    ) => {
      const files = getHomeDir().getByState(gitState, fileStates);

      if (files.length > 0) {
        const relativePaths = getCurrDir().getRelativePaths(files);
        const fileStates = files.map((file) => `${file.getStateString()}:`);

        const fileStatesHtml = hideStates
          ? ""
          : `<div class="git-status-files-statuses"><p>${fileStates.join(
              "</p><p>"
            )}</div>`;

        return `<div class="${className}"><p>${title}</p><div class="git-status-files">${fileStatesHtml}<div class="git-status-files-names"><p>${relativePaths.join(
          "</p><p>"
        )}<p></div><p></p></div></div>`;
      }
      return "";
    };

    const stagedInfo = createStatusSection(
      "Changes to be committed:",
      "git-status-staged",
      GIT_STATE.ADDED
    );

    const notStagedInfo = createStatusSection(
      "Changes not staged for commit:",
      "git-status-not-staged",
      GIT_STATE.CHANGED,
      [FILE_STATE.MODIFIED, FILE_STATE.DELETED, FILE_STATE.RENAMED]
    );

    const untrackedInfo = createStatusSection(
      "Untracked files:",
      "git-status-untracked",
      GIT_STATE.CHANGED,
      FILE_STATE.NEW,
      true
    );

    return `<div class="git-status">${branchInfo}${stagedInfo}${notStagedInfo}${untrackedInfo}</div>`;
  };

function createGitCommandsMap(
  getSvgData,
  getCurrDir,
  setCurrDir,
  getHomeDir,
  gitMethods
) {
  const commandsMap = {
    clone: handle_clone,
    add: handle_add,
    commit: handle_commit,
    pull: handle_pull,
    push: handle_push,
    branch: handle_branch,
    checkout: handle_checkout,
    status: handle_status,
    restore: handle_restore,
  };

  Object.keys(commandsMap).forEach(
    (key) =>
      (commandsMap[key] = commandsMap[key](
        getSvgData,
        getCurrDir,
        setCurrDir,
        getHomeDir,
        gitMethods
      ))
  );

  return commandsMap;
}

export { handle_git, createGitCommandsMap };
