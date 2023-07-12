import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

type Currency = {
  id: string;
  name: string;
};

const ListPage = function () {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.coinbase.com/v2/currencies");
        const data = await response.json();
        setCurrencies(data.data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div>
      <Link to="/HomePage">Home Page</Link>
      <Link to="/">Login Page</Link>
      <h1>Currencies</h1>
      <ul>
        {currencies.map((currency: Currency) => (
          <li key={currency.id}>{currency.name}</li>
        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default ListPage;
