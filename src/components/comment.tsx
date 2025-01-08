'use client';

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns'; // For "time ago" formatting

interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: string;
}

interface CommentsProps {
  postId: string;
}

export default function Comments({ postId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/comments?postId=${postId}`);
      if (response.ok) {
        const fetchedComments = await response.json();
        setComments(fetchedComments);
      } else {
        throw new Error('Failed to fetch comments.');
      }
    } catch {
      setError('Could not load comments. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !content.trim()) {
      setError('Both name and comment fields are required.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId, name, content }),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments((prev) => [...prev, newComment]);
        setName('');
        setContent('');
      } else {
        throw new Error('Failed to post the comment.');
      }
    } catch {
      setError('Unable to post comment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Discussion</h2>

      {/* Comments List */}
      <div className="space-y-6 mb-10">
        {loading && comments.length === 0 && (
          <p className="text-gray-500 text-center animate-pulse">Loading comments...</p>
        )}
        {!loading && comments.length === 0 && (
          <p className="text-gray-500 text-center">No comments yet. Be the first to share your thoughts!</p>
        )}
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-gray-100 border border-gray-200 p-4 rounded-lg shadow-sm transition-transform hover:scale-[1.02]"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-gray-800">{comment.name}</p>
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
              </p>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            id="comment"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Write your comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white ${
            loading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none'
          }`}
        >
          {loading ? 'Posting...' : 'Post Comment'}
        </button>
      </form>
    </div>
  );
}
