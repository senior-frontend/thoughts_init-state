import './App.css';

import { useState, useEffect } from 'react';

import { retrieveRandomElement } from './lib/utils';
import { authorNames, commentContent } from './model/constant';
import { IComment } from './model/types';
import Comment from './components/Comment/Comment';

let globalId = 0;

const commentsFromDb: IComment[] = [
  {
    id: globalId++,
    author: 'John',
    content: 'Nice content',
  },
  {
    id: globalId++,
    author: 'Nick',
    content: "I'm disappointed :(",
  },
  {
    id: globalId++,
    author: 'Sarah',
    content: 'I strive to become a software developer!',
  },
];

function App() {
  const [comments, setComments] = useState<IComment[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setComments(commentsFromDb);
    }, 1500);
  }, []);

  const deleteCommentById = (id: number) => {
    setComments((prev) => (prev as IComment[]).filter((comment) => comment.id !== id));
  };

  const addRandomComment = () => {
    const newComment = {
      id: globalId++,
      author: retrieveRandomElement(authorNames),
      content: retrieveRandomElement(commentContent),
    };

    setComments((prev) => {
      if (prev) {
        return [...prev, newComment];
      }
      return [newComment];
    });
  };

  return (
    <div className="App">
      {comments ? (
        <div className="comments">
          {comments.map((comment: IComment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              author={comment.author}
              content={comment.content}
              deleteCommentById={deleteCommentById}
            />
          ))}
        </div>
      ) : (
        'Loading...'
      )}
      <button onClick={addRandomComment} className="add-comment-button">
        Add comment
      </button>
    </div>
  );
}

export default App;
