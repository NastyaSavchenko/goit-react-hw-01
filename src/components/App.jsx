import Profile from "./Profile/Profile.jsx";
import FriendsList from "./FriendList/FriendList.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";

import userData from "../userData.json";

function App() {
  return (
    <main>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList />
      <TransactionHistory />
    </main>
  );
}

export default App;
