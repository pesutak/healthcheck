'use strict';

module.exports = class Healthcheck {

	static handler = (req, res, next) => {
		if(req.method === 'GET' && req.url === '/healthz'){
			res.status(200).send(JSON.stringify(
				{
					status: 'OK',
					uptime: process.uptime()
				}
			));
		}
		next();
	}

	static Run(port = 80) {
		const express = require('express');
		const p = process.env.HEALTHCHECK_PORT || port;
		const pp = p != 80 ? `:${p}` : ``;

		express()
			.use(this.handler)
			.listen(p,() =>{
				console.log(`Healthcheck Server running on http://localhost${pp}/healthz`);
			})
	}
	
}
