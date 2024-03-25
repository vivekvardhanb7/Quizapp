const javaQuestions = [
    {
      id: 1,
      question: 'What is the output of the following Java code?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++);\n    }\n}',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '6' },
        { id: 'c', text: 'Compilation Error' },
        { id: 'd', text: 'Runtime Error' }
      ],
      answer: 'a'
    },
    {
      id: 2,
      question: 'Which keyword is used to prevent method overriding in Java?',
      options: [
        { id: 'a', text: 'static' },
        { id: 'b', text: 'final' },
        { id: 'c', text: 'private' },
        { id: 'd', text: 'abstract' }
      ],
      answer: 'b'
    },
    {
      id: 3,
      question: 'What will be the output of the following Java code?\n\npublic class Test {\n    public static void main(String[] args) {\n        String s1 = "hello";\n        String s2 = "hello";\n        System.out.println(s1 == s2);\n    }\n}',
      options: [
        { id: 'a', text: 'true' },
        { id: 'b', text: 'false' }
      ],
      answer: 'a'
    },
    {
      id: 4,
      question: 'Which of the following is not a valid Java keyword?',
      options: [
        { id: 'a', text: 'true' },
        { id: 'b', text: 'null' },
        { id: 'c', text: 'void' },
        { id: 'd', text: 'native' }
      ],
      answer: 'a'
    },
    {
      id: 5,
      question: 'What will be the output of the following Java code?\n\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        int y = 2;\n        System.out.println(x / y);\n    }\n}',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '2.5' },
        { id: 'c', text: '2.0' },
        { id: 'd', text: 'Compilation Error' }
      ],
      answer: 'a'
    },
    {
      id: 6,
      question: 'What is the default value of a local variable in Java?',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: 'null' },
        { id: 'c', text: 'Garbage Value' },
        { id: 'd', text: 'Depends on the data type' }
      ],
      answer: 'b'
    },
    {
      id: 7,
      question: 'Which of the following is a marker interface in Java?',
      options: [
        { id: 'a', text: 'Serializable' },
        { id: 'b', text: 'Cloneable' },
        { id: 'c', text: 'Comparable' },
        { id: 'd', text: 'Runnable' }
      ],
      answer: 'a'
    },
    {
      id: 8,
      question: 'What is the output of the following Java code?\n\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(++x);\n    }\n}',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '6' },
        { id: 'c', text: 'Compilation Error' }
      ],
      answer: 'b'
    },
    {
      id: 9,
      question: 'What is the superclass of all classes in Java?',
      options: [
        { id: 'a', text: 'java.util.Object' },
        { id: 'b', text: 'java.lang.Object' },
        { id: 'c', text: 'java.util.Class' },
        { id: 'd', text: 'java.lang.Class' }
      ],
      answer: 'b'
    },
    {
      id: 10,
      question: 'What is the output of the following Java code?\n\npublic class Test {\n    public static void main(String[] args) {\n        System.out.println("Hello" + 1 + 2);\n    }\n}',
      options: [
        { id: 'a', text: 'Hello12' },
        { id: 'b', text: 'Hello3' },
        { id: 'c', text: 'Compilation Error' }
      ],
      answer: 'a'
    }
  ];
  
  export default javaQuestions;
  