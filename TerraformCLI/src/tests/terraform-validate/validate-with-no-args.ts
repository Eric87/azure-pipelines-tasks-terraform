import { TaskScenario } from '../scenarios';
import { TerraformInputs } from '../scenarios-terraform';
import '../scenarios-terraform'

export let validateWithNoArgs = new TaskScenario<TerraformInputs>()
    .inputTerraformCommand("validate")
    .inputApplicationInsightsInstrumentationKey()
    .answerTerraformExists()
    .answerTerraformCommandIsSuccessful()
    .answerTerraformCommandWithVarsFileAsWorkingDirFails()
    .run();

