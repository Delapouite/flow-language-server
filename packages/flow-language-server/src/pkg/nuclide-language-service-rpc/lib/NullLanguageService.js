/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import type {NuclideUri} from 'nuclide-commons/nuclideUri';
import type {DeadlineRequest} from 'nuclide-commons/promise';
import type {AdditionalLogFile} from '../../nuclide-logging/lib/rpc-types';
import type {FileVersion} from '../../nuclide-open-files-rpc/lib/rpc-types';
import type {TextEdit} from 'nuclide-commons-atom/text-edit';
import type {TypeHint} from '../../nuclide-type-hint/lib/rpc-types';
import type {CoverageResult} from '../../nuclide-type-coverage/lib/rpc-types';
import type {
  DefinitionQueryResult,
  FindReferencesReturn,
  Outline,
  CodeAction,
} from 'atom-ide-ui';
import type {ConnectableObservable} from 'rxjs';
import type {NuclideEvaluationExpression} from 'nuclide-debugger-common';
import type {
  AutocompleteRequest,
  AutocompleteResult,
  FileDiagnosticMap,
  FileDiagnosticMessage,
  FormatOptions,
  LanguageService,
  SymbolResult,
} from '../../nuclide-language-service/lib/LanguageService';

import {Observable} from 'rxjs';

// An implementation of LanguageService which always returns no results.
// Useful for implementing aggregate language services.
export class NullLanguageService {
  getDiagnostics(fileVersion: FileVersion): Promise<?FileDiagnosticMap> {
    return Promise.resolve(null);
  }

  observeDiagnostics(): ConnectableObservable<FileDiagnosticMap> {
    return Observable.empty().publish();
  }

  getAutocompleteSuggestions(
    fileVersion: FileVersion,
    position: atom$Point,
    request: AutocompleteRequest,
  ): Promise<?AutocompleteResult> {
    return Promise.resolve(null);
  }

  getDefinition(
    fileVersion: FileVersion,
    position: atom$Point,
  ): Promise<?DefinitionQueryResult> {
    return Promise.resolve(null);
  }

  findReferences(
    fileVersion: FileVersion,
    position: atom$Point,
  ): ConnectableObservable<?FindReferencesReturn> {
    return Observable.of(null).publish();
  }

  getCoverage(filePath: NuclideUri): Promise<?CoverageResult> {
    return Promise.resolve(null);
  }

  getOutline(fileVersion: FileVersion): Promise<?Outline> {
    return Promise.resolve(null);
  }

  getAdditionalLogFiles(
    deadline: DeadlineRequest,
  ): Promise<Array<AdditionalLogFile>> {
    return Promise.resolve([]);
  }

  getCodeActions(
    fileVersion: FileVersion,
    range: atom$Range,
    diagnostics: Array<FileDiagnosticMessage>,
  ): Promise<Array<CodeAction>> {
    return Promise.resolve([]);
  }

  typeHint(fileVersion: FileVersion, position: atom$Point): Promise<?TypeHint> {
    return Promise.resolve(null);
  }

  highlight(
    fileVersion: FileVersion,
    position: atom$Point,
  ): Promise<?Array<atom$Range>> {
    return Promise.resolve(null);
  }

  formatSource(
    fileVersion: FileVersion,
    range: atom$Range,
    options: FormatOptions,
  ): Promise<?Array<TextEdit>> {
    return Promise.resolve(null);
  }

  formatEntireFile(
    fileVersion: FileVersion,
    range: atom$Range,
    options: FormatOptions,
  ): Promise<?{
    newCursor?: number,
    formatted: string,
  }> {
    return Promise.resolve(null);
  }

  formatAtPosition(
    fileVersion: FileVersion,
    position: atom$Point,
    triggerCharacter: string,
    options: FormatOptions,
  ): Promise<?Array<TextEdit>> {
    return Promise.resolve(null);
  }

  getEvaluationExpression(
    fileVersion: FileVersion,
    position: atom$Point,
  ): Promise<?NuclideEvaluationExpression> {
    return Promise.resolve(null);
  }

  supportsSymbolSearch(directories: Array<NuclideUri>): Promise<boolean> {
    return Promise.resolve(false);
  }

  symbolSearch(
    query: string,
    directories: Array<NuclideUri>,
  ): Promise<?Array<SymbolResult>> {
    return Promise.resolve(null);
  }

  getProjectRoot(fileUri: NuclideUri): Promise<?NuclideUri> {
    return Promise.resolve(null);
  }

  isFileInProject(fileUri: NuclideUri): Promise<boolean> {
    return Promise.resolve(false);
  }

  getExpandedSelectionRange(
    fileVersion: FileVersion,
    currentSelection: atom$Range,
  ): Promise<?atom$Range> {
    return Promise.resolve(null);
  }

  getCollapsedSelectionRange(
    fileVersion: FileVersion,
    currentSelection: atom$Range,
    originalCursorPosition: atom$Point,
  ): Promise<?atom$Range> {
    return Promise.resolve(null);
  }

  dispose(): void {}
}

// Assert that NullLanguageService satisifes the LanguageService interface:
(((null: any): NullLanguageService): LanguageService);
