import { trpc } from "@tcll/react/utils/trpc";

type ModalType = {
  showModal: boolean;
  onClose: () => void;
};

const Modal = ({ onClose, showModal }: ModalType) => {
  if (!showModal) return null;

  const utils = trpc.useContext();

  const mutation = trpc.useMutation(["post.create"], {
    onSuccess() {
      utils.invalidateQueries(["post.list"]);
    },
  });

  function handleInsertNewPost(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElements = event.currentTarget
      .elements as typeof event.currentTarget.elements & {
      title: { value: string };
      description: { value: string };
    };

    mutation.mutate({
      title: formElements.title.value,
      description: formElements.description.value,
    });

    onClose();
  }

  return (
    <div className="modal">
      <div className="modal--title">
        <h3>New Post</h3>
      </div>

      <form className="modal--body" onSubmit={handleInsertNewPost}>
        <input name="title" required placeholder="Insert a title here" />
        <input name="description" required placeholder="Insert description" />

        <div className="modal--footer">
          <button type="submit">Insert</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
