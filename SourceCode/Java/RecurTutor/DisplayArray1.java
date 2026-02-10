public static void displayArray(int[] arr, int first, int last) {
    System.out.print(arr[first] + " ");
    if (first < last) {
        displayArray(arr, first + 1, last);
    }
}
