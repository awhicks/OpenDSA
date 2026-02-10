public static void displayArray(int[] arr, int first, int last) {
    if (first <= last) {
        displayArray(arr, first, last - 1);
        System.out.print(arr[last] + " ");
    }
}
