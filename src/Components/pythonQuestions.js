const pythonQuestions = [
    {
      id: 1,
      question: 'What is the output of the following Python code?\n\nx = 5\ny = 2\nprint(x / y)',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '2.5' },
        { id: 'c', text: '2.0' },
        { id: 'd', text: 'Error' }
      ],
      answer: 'c'
    },
    {
      id: 2,
      question: 'Which of the following is not a valid data type in Python?',
      options: [
        { id: 'a', text: 'int' },
        { id: 'b', text: 'char' },
        { id: 'c', text: 'float' },
        { id: 'd', text: 'bool' }
      ],
      answer: 'b'
    },
    {
      id: 3,
      question: 'What will be the output of the following Python code?\n\nx = "Hello"\nprint(x[2:])',
      options: [
        { id: 'a', text: 'Hel' },
        { id: 'b', text: 'llo' },
        { id: 'c', text: 'lo' },
        { id: 'd', text: 'Error' }
      ],
      answer: 'b'
    },
    {
      id: 4,
      question: 'What is the result of the following Python expression?\n\n3 * 3 ** 3',
      options: [
        { id: 'a', text: '27' },
        { id: 'b', text: '81' },
        { id: 'c', text: '9' },
        { id: 'd', text: 'Error' }
      ],
      answer: 'b'
    },
    {
      id: 5,
      question: 'Which statement is used to exit a loop in Python?',
      options: [
        { id: 'a', text: 'quit' },
        { id: 'b', text: 'break' },
        { id: 'c', text: 'continue' },
        { id: 'd', text: 'exit' }
      ],
      answer: 'b'
    },
    {
      id: 6,
      question: 'What does the function len() do in Python?',
      options: [
        { id: 'a', text: 'Returns the length of a list or string' },
        { id: 'b', text: 'Returns the largest element of a list' },
        { id: 'c', text: 'Returns the smallest element of a list' },
        { id: 'd', text: 'None of the above' }
      ],
      answer: 'a'
    },
    {
      id: 7,
      question: 'What will be the output of the following Python code?\n\nprint("Python"[-1])',
      options: [
        { id: 'a', text: 'P' },
        { id: 'b', text: 'n' },
        { id: 'c', text: 'o' },
        { id: 'd', text: 'None' }
      ],
      answer: 'b'
    },
    {
      id: 8,
      question: 'What is the correct way to create a function in Python?',
      options: [
        { id: 'a', text: 'def function_name:' },
        { id: 'b', text: 'define function_name()' },
        { id: 'c', text: 'function function_name()' },
        { id: 'd', text: 'function_name():' }
      ],
      answer: 'a'
    },
    {
      id: 9,
      question: 'What is the output of the following Python code?\n\nprint(2 + 2 * 3 - 4 / 2)',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '6' },
        { id: 'c', text: '7' },
        { id: 'd', text: '8' }
      ],
      answer: 'c'
    },
    {
      id: 10,
      question: 'Which of the following is the correct way to comment multiple lines in Python?',
      options: [
        { id: 'a', text: '/* Comment */' },
        { id: 'b', text: '# Comment' },
        { id: 'c', text: '*/ Comment /*' },
        { id: 'd', text: '// Comment' }
      ],
      answer: 'b'
    }
  ];
  
  export default pythonQuestions;
  