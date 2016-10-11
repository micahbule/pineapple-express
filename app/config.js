module.exports = app => {
	var bodyParser = require('body-parser');
	var compression = require('compression');
	var cookieParser = require('cookie-parser');
	var helmet = require('helmet');
	var morgan = require('morgan');
	var winston = require('winston');

	app._exports = {
		csurfProtection: {}
	};

	// Middleware that protects the app from various web
	// vulnerabilities by setting the appropriate headers.
	app.use(helmet());

	if (process.env.CSRF_PROTECTION === 'true') {
		winston.info('CSRF Protection is enabled.');

		app._exports.csurfProtection = require('csurf')({ cookie: true });
	}

	// Cookie parser middleware.
	// You can override the default cookie secret via .env
	app.use(cookieParser(process.env.COOKIE_SECRET || 'pineapple_express'));

	// Middleware to log details about the request.
	// You can override the default format via .env
	app.use(morgan(process.env.REQUEST_LOG || 'tiny'));

	// Middleware to parse request bodies.
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	// Middleware to compress response bodies.
	app.use(compression());

	return app;
};
