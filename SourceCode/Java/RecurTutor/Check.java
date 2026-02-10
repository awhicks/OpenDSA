public void checkYourUnderstanding(int value) {
    if (value > 25) {
        System.out.println(80 - value);
    }
    else {
        checkYourUnderstanding(value * 2);
    }
}
