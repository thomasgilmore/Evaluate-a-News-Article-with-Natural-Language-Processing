function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }

test('the data is peanut butter', done => {
    function callback(data) {
      expect(data).toBe('peanut butter');
      done();
    }
  
    fetchData(callback);
  });
