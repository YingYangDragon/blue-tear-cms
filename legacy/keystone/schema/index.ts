import { SourceDocument } from './sourceDocument';
import { DocumentSection } from './documentSection';
import { DocumentPage } from './documentPage';
import { Excerpt } from './excerpt';
import { Story } from './story';
import { Scene } from './scene';
import { MediaAsset } from './mediaAsset';
import { AIPrompt } from './aiPrompt';
import { AIPromptVersion } from './aiPromptVersion';
import { AIRun } from './aiRun';
import { ProductionStep } from './productionStep';
import { ProductionPath } from './productionPath';
import { ProductionRun } from './productionRun';
import { Tag } from './tag';

import type { Lists } from '../../../.keystone/types';

export const lists = {
  SourceDocument,
  DocumentSection,
  DocumentPage,
  Excerpt,
  Story,
  Scene,
  MediaAsset,
  AIPrompt,
  AIPromptVersion,
  AIRun,
  ProductionStep,
  ProductionPath,
  ProductionRun,
  Tag,
} satisfies Lists;
