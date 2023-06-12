'use strict';
const supertest=require('supertest');
const {app}=require('../../server');
const req=supertest(app);
describe('server Testing', () => { 
    it('testing not found page',async()=>{
        const res=await req.get('/nofoundex');
        expect(res.status).toEqual(404);
    })
    it('testing internal server error ',async()=>{
        const res=await req.get('/bad');
        expect(res.status).toEqual(500);
    })
    it('testing home page ',async()=>{
        const res=await req.get('/');
        expect(res.body.message).toBe('you are on the home page')
    })
})