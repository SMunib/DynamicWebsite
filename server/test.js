const request = require('supertest');
const express = require('express');
const app = require('./server'); // Assuming server.js exports the app

describe('GET /api/greeting', () => {
  it('should return a greeting message based on the time of day', async () => {
    const res = await request(app).get('/api/greeting');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('greeting');
  });
});
