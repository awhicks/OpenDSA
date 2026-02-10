public void Countdown(int leadTime) {
    System.out.println(leadTime + "...");
    if (leadTime > 1) {
        Countdown(leadTime - 1);
    } else {
        System.out.println("Happy New Year!");
    }
}
