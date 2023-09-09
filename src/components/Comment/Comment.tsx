import { IComment } from '../../model/types';
import s from './Comment.module.css';

interface CommentProps extends IComment {
  deleteCommentById: (id: number) => void;
}

const Comment = ({ id, author, content, deleteCommentById }: CommentProps) => {
  return (
    <div className={s.root}>
      <div className={s.title}>
        {id} {author}
      </div>
      <div className={s.content}>{content}</div>
      <div className={s.deleteIcon} onClick={() => deleteCommentById(id)}>
        X
      </div>
    </div>
  );
};

export default Comment;
