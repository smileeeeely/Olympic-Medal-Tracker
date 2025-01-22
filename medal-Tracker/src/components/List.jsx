const List = ({ listData }) => {
  return (
    <div className="listStyle">
      {listData.contry} {listData.goldMedal} {listData.silverMedal}{" "}
      {listData.bronzeMedal}
    </div>
  );
};

export default List;
