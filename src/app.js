const $ = require('jquery');
import './script/components/nav-bar.js';
import './script/components/race-schedule.js';
import './script/components/next-round.js';
import './script/components/last-round.js';
import './script/components/driver-standing.js';
import './script/components/constructor-standing.js';
import './script/components/about-section.js';
import './style/style.css';
import dataDriver from './script/data/driver.js';
import dataConstructor from './script/data/constructor.js';
import raceSchedule from './script/data/schedule.js';
import dataStreaming from './script/data/streaming.js';
import main from './script/view/main.js';

window.addEventListener('DOMContentLoaded', () => {
    main();
    dataDriver();
    dataConstructor();
    raceSchedule();
    dataStreaming();
})