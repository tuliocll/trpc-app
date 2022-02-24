type FabType = {
  onClick: () => void;
};

const Fab = ({ onClick }: FabType) => {
  return (
    <button className="fab-button" onClick={onClick}>
      +
    </button>
  );
};

export default Fab;
