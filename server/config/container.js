const { createContainer, asClass } = require('awilix');
const CursController = require('../controllers/cursController');
const CursService = require('../services/cursService');
const CursRepository = require('../repositories/cursRepository');
const UtilizatorController = require('../controllers/utilizatorController');
const UtilizatorService = require('../services/utilizatorService');
const UtilizatorRepository = require('../repositories/utilizatorRepository');
const AbonamentController = require('../controllers/abonamentController');
const AbonamentService = require('../services/abonamentService');
const AbonamentRepository = require('../repositories/abonamentRepository');
const TestService = require('../services/testService');
const TestController = require('../controllers/testController');

const container = createContainer();


container.register({

    cursController: asClass(CursController).scoped(),
    utilizatorController: asClass(UtilizatorController).scoped(),
    abonamentController: asClass(AbonamentController).scoped(),
    testController: asClass(TestController).scoped(),

    cursService: asClass(CursService).scoped(),
    utilizatorService: asClass(UtilizatorService).scoped(),
    abonamentService: asClass(AbonamentService).scoped(),

    cursRepository: asClass(CursRepository).singleton(),
    utilizatorRepository: asClass(UtilizatorRepository).singleton(),
    abonamentRepository: asClass(AbonamentRepository).singleton(),

    testServiceSingleton: asClass(TestService).singleton(),
    testServiceScoped: asClass(TestService).scoped(),
    testServiceTransient: asClass(TestService).transient(),
});

module.exports = container;
