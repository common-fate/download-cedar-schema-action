// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts,import_extension=none"
// @generated from file commonfate/control/config/v1alpha1/selector.proto (package commonfate.control.config.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  CreateSelectorRequest,
  CreateSelectorResponse,
  DeleteSelectorRequest,
  DeleteSelectorResponse,
  GetSelectorRequest,
  GetSelectorResponse,
  UpdateSelectorRequest,
  UpdateSelectorResponse
} from './selector_pb'
import { MethodKind } from '@bufbuild/protobuf'

/**
 * @generated from service commonfate.control.config.v1alpha1.SelectorService
 */
export const SelectorService = {
  typeName: 'commonfate.control.config.v1alpha1.SelectorService',
  methods: {
    /**
     * @generated from rpc commonfate.control.config.v1alpha1.SelectorService.CreateSelector
     */
    createSelector: {
      name: 'CreateSelector',
      I: CreateSelectorRequest,
      O: CreateSelectorResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.control.config.v1alpha1.SelectorService.GetSelector
     */
    getSelector: {
      name: 'GetSelector',
      I: GetSelectorRequest,
      O: GetSelectorResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.control.config.v1alpha1.SelectorService.UpdateSelector
     */
    updateSelector: {
      name: 'UpdateSelector',
      I: UpdateSelectorRequest,
      O: UpdateSelectorResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.control.config.v1alpha1.SelectorService.DeleteSelector
     */
    deleteSelector: {
      name: 'DeleteSelector',
      I: DeleteSelectorRequest,
      O: DeleteSelectorResponse,
      kind: MethodKind.Unary
    }
  }
} as const
