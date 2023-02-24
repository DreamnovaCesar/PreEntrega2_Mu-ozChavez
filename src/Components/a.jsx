useEffect(() => {
    const getProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const products = [
            { id: 1, name: 'Product 1', price: 10.99 },
            { id: 2, name: 'Product 2', price: 20.99 },
            { id: 3, name: 'Product 3', price: 30.99 },
            { id: 4, name: 'Product 4', price: 40.99 },
          ];
          resolve(products);
        }, 3000);
      });
    };

    getProducts().then((products) => {
      setProducts(products);
    }).catch((error) => {
      console.error(error);
    });
  }, []);


  function getProductList() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productList = [
          { id: 1, name: "Product 1", price: 10 },
          { id: 2, name: "Product 2", price: 20 },
          { id: 3, name: "Product 3", price: 30 },
          { id: 4, name: "Product 4", price: 40 },
          { id: 5, name: "Product 5", price: 50 },
          { id: 6, name: "Product 6", price: 60 },
          { id: 7, name: "Product 7", price: 70 },
        ];
        resolve(productList);
      }, 3000);
    });
  }
  
  useEffect(() => {
    getProductList().then((result) => {
      setProductList(result);
    });
  }, []);


