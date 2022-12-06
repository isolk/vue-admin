<script setup lang="ts">
import { Diff } from "vue-diff";
import {CodeDiff} from 'v-code-diff'
import JsonView from "@lib/JsonView.vue"
let x = `if (stQuestBoxTable.iBoxType == QuestBoxType_Daily)
    {
        owner.innateTreeMgr->getTaskExtReward(MTTDProto::EffectType_DailyTask, iFlowId, vInnateTreeReward);
    	owner.questMgr->captureOperStep(QuestStepOper_Add, QuestCond_TotalQuestBox, 1, 1);
    }
    else if (stQuestBoxTable.iBoxType == QuestBoxType_Weekly)
    {
        owner.innateTreeMgr->getTaskExtReward(MTTDProto::EffectType_WeekTask, iFlowId, vInnateTreeReward);
    	owner.questMgr->captureOperStep(QuestStepOper_Add, QuestCond_TotalQuestBox, 2, 1);
    }`
let y = `if (stQuestBoxTable.iBoxType == QuestBoxType_Daily)
    {
        owner.innateTreeMgr->getTaskExtReward(MTTDProto::EffectType_DailyTask, iFlowId, vInnateTreeReward);
		if(stQuestBoxTable.iActivation == 100)
		{
    		owner.questMgr->captureOperStep(QuestStepOper_Add, QuestCond_TotalQuestBox, 1, 1);
		}
    }
    else if (stQuestBoxTable.iBoxType == QuestBoxType_Weekly)
    {
        owner.innateTreeMgr->getTaskExtReward(MTTDProto::EffectType_WeekTask, iFlowId, vInnateTreeReward);
		if(stQuestBoxTable.iActivation == 100)
		{
    		owner.questMgr->captureOperStep(QuestStepOper_Add, QuestCond_TotalQuestBox, 2, 1);
		}
    }`
    // CodeDiff.
</script>

<template>
    <!-- <Diff
      mode="split"
      theme="dark"
      language="text"
      :prev="x"
      :current="y"
    /> -->
    <!-- <code-diff
      :old-string="x"
      :new-string="y"
      file-name="test.txt"
      output-format="side-by-side"/> -->
    <JsonView />
</template>