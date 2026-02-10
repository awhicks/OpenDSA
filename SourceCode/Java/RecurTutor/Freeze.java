public void springFreeze(int temp) {
    if (temp < 32) {
        System.out.println("Frost!");
    }
    else {
        System.out.println("temps are dropping...");
        springFreeze( - 4);
    }
}
