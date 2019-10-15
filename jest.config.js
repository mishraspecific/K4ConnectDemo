module.exports = {
	"preset": "react-native",
	"collectCoverage": true,
	"setupFiles": [
		"./jest/setup.js"
	  ],
	  "coverageReporters": [
		"text"
	  ],
	  "coveragePathIgnorePatterns": [
		"<rootDir>/jest/",
		"<rootDir>/src/store/"
	  ],
	  "transformIgnorePatterns": [
		"node_modules/(?!react-native|native-base|react-navigation|react-native-gesture-handler)"
	  ],
	  "collectCoverageFrom": [
		"src/**/*.{js,jsx,mjs}"
	  ]
}
