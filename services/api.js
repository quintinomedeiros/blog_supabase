import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://sazglmdjdfqzxrdqigjq.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhemdsbWRqZGZxenhyZHFpZ2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NDMyOTgsImV4cCI6MjA0MzAxOTI5OH0.lkNscXc7K1nNWcXo8hDbydhfUuZOWCaXLWxRKKY7Y_E",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhemdsbWRqZGZxenhyZHFpZ2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NDMyOTgsImV4cCI6MjA0MzAxOTI5OH0.lkNscXc7K1nNWcXo8hDbydhfUuZOWCaXLWxRKKY7Y_E"
    }
})