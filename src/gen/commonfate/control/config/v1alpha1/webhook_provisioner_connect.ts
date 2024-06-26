// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts,import_extension=none"
// @generated from file commonfate/control/config/v1alpha1/webhook_provisioner.proto (package commonfate.control.config.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  CreateWebhookProvisionerRequest,
  CreateWebhookProvisionerResponse,
  DeleteWebhookProvisionerRequest,
  DeleteWebhookProvisionerResponse,
  GetWebhookProvisionerRequest,
  GetWebhookProvisionerResponse,
  UpdateWebhookProvisionerRequest,
  UpdateWebhookProvisionerResponse
} from './webhook_provisioner_pb'
import { MethodKind } from '@bufbuild/protobuf'

/**
 * @generated from service commonfate.control.config.v1alpha1.WebhookProvisionerService
 */
export const WebhookProvisionerService = {
  typeName: 'commonfate.control.config.v1alpha1.WebhookProvisionerService',
  methods: {
    /**
     * @generated from rpc commonfate.control.config.v1alpha1.WebhookProvisionerService.CreateWebhookProvisioner
     */
    createWebhookProvisioner: {
      name: 'CreateWebhookProvisioner',
      I: CreateWebhookProvisionerRequest,
      O: CreateWebhookProvisionerResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.control.config.v1alpha1.WebhookProvisionerService.GetWebhookProvisioner
     */
    getWebhookProvisioner: {
      name: 'GetWebhookProvisioner',
      I: GetWebhookProvisionerRequest,
      O: GetWebhookProvisionerResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.control.config.v1alpha1.WebhookProvisionerService.UpdateWebhookProvisioner
     */
    updateWebhookProvisioner: {
      name: 'UpdateWebhookProvisioner',
      I: UpdateWebhookProvisionerRequest,
      O: UpdateWebhookProvisionerResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc commonfate.control.config.v1alpha1.WebhookProvisionerService.DeleteWebhookProvisioner
     */
    deleteWebhookProvisioner: {
      name: 'DeleteWebhookProvisioner',
      I: DeleteWebhookProvisionerRequest,
      O: DeleteWebhookProvisionerResponse,
      kind: MethodKind.Unary
    }
  }
} as const
