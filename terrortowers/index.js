"use strict";
//and so it begins
import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const sockio = new Server(server);

sockio.on('connection', (socket) => {
	console.log('socket connected');
	socket.on('new game', () => { 
		//grab current gamestate from fs and deliver in response
	})
	socket.on('score', (value) => {
		//track kills to build points for the user
	})
	socket.on('miss', (value) => {
		//enemy slips past affecting user HP
	}

	socket.on('disconnect', () => {
		console.log('socket disconnected');
	});
});



app.get('/', (req, res) => {
	res.sendFile(__dirname + '/towereditor.htm');
});
server.listen(3000, () => {
	console.log('server running at http://localhost:3000');
});

/*
client shoudl include <script src="https://cdn.socket.io/4.8.1/socket.io.min.js"></script>
and then can open a socket with	const socket = io();
*/


