/* *** ODSATag: Comparable *** */
/* *** ODSATag: Student *** */
public class Student implements Comparable<Student> {
    private String name;
    private int credits;

    public Student(String name, int credits) {
        this.name = name;
        this.credits = credits;
    }
/* *** ODSAendTag: Student *** */

/* *** ODSATag: compareTo *** */
    @Override
    public int compareTo(Student other) {
        int result;
        if (this.credits == other.credits) {
            result = 0;
        }
        else if (this.credits < other.credits) {
            result = -1;
        }
        else {
            result = 1;
        }
        return result;
    }
/* *** ODSAendTag: compareTo *** */
}
/* *** ODSAendTag: Comparable *** */
