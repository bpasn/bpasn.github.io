function createRowElements(numColumns) {
    const elements = [];
    for (let i = 0; i < numColumns; i++) {
      elements.push('*'); 
    }
    return elements;
  }
  
  function createInvertedPyramid(totalRows) {
    const pyramid = [];
    
    // จำนวน columns เริ่มต้นที่ 4
    let numColumns = 4;
  
    for (let i = 0; i < totalRows; i++) {
      if (i < totalRows - 2) {
        pyramid.push(createRowElements(numColumns));
      } else if (i === totalRows - 2) {
        pyramid.push(createRowElements(3));
      } else if (i === totalRows - 1) {
        pyramid.push(createRowElements(2));
      }
    }
  
    return pyramid;
  }
  
  const totalRows2 = 4; // จำนวนแถวทั้งหมด
  const pyramid2 = createInvertedPyramid(totalRows2);
  console.log(pyramid2)
  