'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function RedisTestPage() {
  const [getResult, setGetResult] = useState<any>(null);
  const [postResult, setPostResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    key: 'test:demo',
    value: JSON.stringify({ message: 'Hello Redis!', user: 'demo@gtreasury.com' }, null, 2),
    expireInSeconds: 300
  });

  const testGet = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/redis-test');
      const data = await response.json();
      setGetResult(data);
    } catch (error) {
      setGetResult({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  const testPost = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/redis-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: formData.key,
          value: JSON.parse(formData.value),
          expireInSeconds: formData.expireInSeconds
        }),
      });
      const data = await response.json();
      setPostResult(data);
    } catch (error) {
      setPostResult({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Redis Test Page</h1>
        <p className="text-muted-foreground">
          Test the node-redis integration with your Vercel KV database
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* GET Test */}
        <Card>
          <CardHeader>
            <CardTitle>GET Test</CardTitle>
            <CardDescription>
              Test basic Redis connection and operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={testGet} 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Testing...' : 'Test GET /api/redis-test'}
            </Button>
            
            {getResult && (
              <div className="mt-4">
                <Label className="text-sm font-medium">Response:</Label>
                <Textarea
                  value={JSON.stringify(getResult, null, 2)}
                  readOnly
                  className="mt-2 font-mono text-sm"
                  rows={8}
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* POST Test */}
        <Card>
          <CardHeader>
            <CardTitle>POST Test</CardTitle>
            <CardDescription>
              Store custom data in Redis with expiration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="key">Key</Label>
              <Input
                id="key"
                value={formData.key}
                onChange={(e) => setFormData(prev => ({ ...prev, key: e.target.value }))}
                placeholder="redis:key"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="value">Value (JSON)</Label>
              <Textarea
                id="value"
                value={formData.value}
                onChange={(e) => setFormData(prev => ({ ...prev, value: e.target.value }))}
                placeholder='{"message": "Hello Redis!"}'
                rows={4}
                className="font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expire">Expire In Seconds</Label>
              <Input
                id="expire"
                type="number"
                value={formData.expireInSeconds}
                onChange={(e) => setFormData(prev => ({ ...prev, expireInSeconds: parseInt(e.target.value) }))}
                placeholder="300"
              />
            </div>

            <Button 
              onClick={testPost} 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Storing...' : 'Test POST /api/redis-test'}
            </Button>
            
            {postResult && (
              <div className="mt-4">
                <Label className="text-sm font-medium">Response:</Label>
                <Textarea
                  value={JSON.stringify(postResult, null, 2)}
                  readOnly
                  className="mt-2 font-mono text-sm"
                  rows={6}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• <strong>GET Test:</strong> Tests basic Redis connection, stores and retrieves a test value</p>
          <p>• <strong>POST Test:</strong> Stores custom JSON data with optional expiration</p>
          <p>• The Redis client uses your Vercel KV database with the KV_URL environment variable</p>
          <p>• All operations include proper error handling and connection management</p>
        </CardContent>
      </Card>
    </div>
  );
} 