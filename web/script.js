  document.getElementById('category').addEventListener('change', function() {
      var category = this.value;
      var extraFields = document.getElementById('extraFields');

      // Clear previous extra fields
      extraFields.innerHTML = '';

      if (category === 'option1') {
          // Add extra fields for Option 1
          var input1 = document.createElement('input');
          input1.type = 'text';
          input1.name = 'option1Field';
          input1.placeholder = 'Option 1 Field';
          extraFields.appendChild(input1);
      } else if (category === 'option2') {
          // Add extra fields for Option 2
          var input2 = document.createElement('input');
          input2.type = 'text';
          input2.name = 'option2Field';
          input2.placeholder = 'Option 2 Field';
          extraFields.appendChild(input2);
      } else if (category === 'option3') {
          // Add extra fields for Option 3
          var input3 = document.createElement('input');
          input3.type = 'text';
          input3.name = 'option3Field';
          input3.placeholder = 'Option 3 Field';
          extraFields.appendChild(input3);
      }
  });