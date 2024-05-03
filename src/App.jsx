import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import "./App.css";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./Transactions.json";

const App = () => {
  const getValues = userData;
  const getFriends = friends;
  return (
    <>
      <Profile
        name={getValues.username}
        tag={getValues.tag}
        location={getValues.location}
        image={getValues.avatar}
        stats={getValues.stats}
      />
      <FriendList friends={getFriends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
