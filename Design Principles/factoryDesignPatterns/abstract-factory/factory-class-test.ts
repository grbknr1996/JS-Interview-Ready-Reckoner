import { LoggerFactory } from "./factory-class";

const logger = LoggerFactory.createLogger();

logger.debug("Debug");
logger.warn("warn");
logger.info("info");
logger.error("error");
