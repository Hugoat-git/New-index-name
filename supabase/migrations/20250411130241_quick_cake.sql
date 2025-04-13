/*
  # Create emails table for newsletter subscriptions

  1. New Tables
    - `emails`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `status` (text) - For tracking email status (subscribed, unsubscribed, etc.)
  
  2. Security
    - Enable RLS on `emails` table
    - Add policy for inserting new emails
*/

CREATE TABLE IF NOT EXISTS emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'subscribed'
);

ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert new emails
CREATE POLICY "Anyone can insert emails"
  ON emails
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view emails
CREATE POLICY "Only authenticated users can view emails"
  ON emails
  FOR SELECT
  TO authenticated
  USING (true);