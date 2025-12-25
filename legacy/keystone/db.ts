/**
 * Database configuration for Keystone.
 * This file is responsible for specifying the database provider and connection URL.
 */
export const db = {
  provider: 'postgresql',
  url: process.env.DATABASE_URL!,
};
