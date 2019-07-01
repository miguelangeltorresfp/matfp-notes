# OBJECT LITERAL CHALLENGE

```bash
function addressMaker(city, state, country='United States') {
  
  const newAddress = {
      city,
      state,
      country
  };

  console.log(newAddress);
  console.log(`${newAddress.city} ${newAddress.country} ${newAddress.state}`);
}

addressMaker('Austin', 'Texas');
```
