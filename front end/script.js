// Mock data (can be replaced with an API call)
const pricingData = [
    { product: 'Product A', currentPrice: 150, recommendedPrice: 110, demandLevel: 'High' },
    { product: 'Product B', currentPrice: 40, recommendedPrice: 45, demandLevel: 'Medium' },
    { product: 'Product C', currentPrice: 45, recommendedPrice: 80, demandLevel: 'Low' },
  ];
  
  // Function to populate the pricing table
  function populatePricingTable() {
    const tableBody = document.querySelector('#pricing-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows
  
    pricingData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.product}</td>
        <td>$${item.currentPrice}</td>
        <td>$${item.recommendedPrice}</td>
        <td>${item.demandLevel}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to handle settings form submission
  document.getElementById('settings-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const minPrice = document.getElementById('min-price').value;
    const maxPrice = document.getElementById('max-price').value;
    const currentPrice=document.getElementById("currentprice").value;
    if (currentPrice>minPrice && currentPrice<maxPrice){
      alert("Medium")
    }
    if (currentPrice<minPrice){
      alert("low")
    }
    if (currentPrice>maxPrice){
      alert("High")
    }
  
    // Save settings (mock implementation)
    console.log('Settings saved:', { minPrice, maxPrice });
    alert('Settings saved successfully!');
  });
  
  // Initialize the app
  populatePricingTable();
  [
    { "product": "Product A", "currentPrice": 100, "recommendedPrice": 110, "demandLevel": "High" },
    { "product": "Product B", "currentPrice": 50, "recommendedPrice": 45, "demandLevel": "Medium" },
    { "product": "Product C", "currentPrice": 75, "recommendedPrice": 80, "demandLevel": "Low" }
  ]