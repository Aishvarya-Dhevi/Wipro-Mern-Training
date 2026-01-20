package BasicPrograms;
public class StringExample2 {
    public static void main(String[] args) {

        String s1 = "Here is my java program";

        // Split the string using space
        String[] words = s1.split(" ");

        int wordCount = 0;

        // Count words using for loop
        for (int i = 0; i < words.length; i++) {
            wordCount++;
        }
        System.out.println("Total number of words: " + wordCount);
    }
}
