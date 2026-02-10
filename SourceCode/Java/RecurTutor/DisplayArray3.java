public static void displayArray(int[] arr, int first, int last) {
    if (first == last) {
        System.out.print(arr[first] + " ");
    } else {
        int mid = (first + last) / 2;
        displayArray(arr, first, mid);
        displayArray(arr, mid + 1, last);
    }
}
