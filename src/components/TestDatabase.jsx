import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

function TestDatabase() {
  const [status, setStatus] = useState({ loading: true, result: null });

  useEffect(() => {
    async function checkConnection() {
      try {
        const querySnapshot = await getDocs(collection(db, 'donations'));
        const donations = [];
        querySnapshot.forEach((doc) => {
          donations.push({ id: doc.id, ...doc.data() });
        });
        
        setStatus({
          loading: false,
          result: {
            success: true,
            data: donations,
            message: donations.length ? 'Database connected with data' : 'Database connected successfully'
          }
        });
      } catch (error) {
        setStatus({
          loading: false,
          result: {
            success: false,
            error: error.message,
            message: 'Database connection failed'
          }
        });
      }
    }
    checkConnection();
  }, []);

  if (status.loading) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Testing Firebase connection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Firebase Status</h2>
      
      {status.result.success ? (
        <div className="text-green-600">
          <p className="mb-2">✅ {status.result.message}</p>
          {status.result.data?.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Available data:</h3>
              <pre className="bg-gray-50 p-3 rounded-lg overflow-auto max-h-60 text-sm">
                {JSON.stringify(status.result.data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      ) : (
        <div className="text-red-600">
          <p className="mb-2">❌ {status.result.message}</p>
          {status.result.error && (
            <p className="text-sm mt-2">
              Error: {status.result.error}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default TestDatabase;