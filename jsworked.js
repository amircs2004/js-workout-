function calculateAverageOfEvenNumbers(numbers) {
    
    const evenNumbers = numbers.filter(num => num % 2 === 0);
  
   
    const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

    if (evenNumbers.length === 0) {
      return 0; //
    } else {
      return sum / evenNumbers.length;
    }
  }
  

  const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const average = calculateAverageOfEvenNumbers(myArray);
  console.log(average); 
 
 
  function findLongestWord(words) {
    return words.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, '');
  }
  function calculateAveragePages(books) {
    
    const pageCounts = books.map(book => book.pages);
  
    
    const totalPages = pageCounts.reduce((acc, curr) => acc + curr, 0);
  
    
    const averagePages = totalPages / books.length;
  
    return averagePages;
  }
  
  // Example usage:
  const books = [
    { title: "Book 1", author: "Author 1", pages: 200 },
    { title: "Book 2", author: "Author 2", pages: 300 },
    { title: "Book 3", author: "Author 3", pages: 250 }
  ];
  
  const average = calculateAveragePages(books);
  console.log(average); 
  function countPeopleByCity(people) {
    return people.reduce((cityCounts, person) => {
      const city = person.city;
      cityCounts[city] = (cityCounts[city] || 0) + 1;
      return cityCounts;
    }, {});
  }
  
  
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
  ];
  
  const cityCounts = countPeopleByCity(people);
  console.log(cityCounts);

  function countStringFrequencies(strings) {
    return strings.reduce((frequencyCounts, string) => {
      frequencyCounts[string] = (frequencyCounts[string] || 0) + 1;
      return frequencyCounts;
    }, {});
  }
  
  
  const words = ["hello", "world", "hello"];
  const frequencyCounts = countStringFrequencies(words);
  console.log(frequencyCounts); 