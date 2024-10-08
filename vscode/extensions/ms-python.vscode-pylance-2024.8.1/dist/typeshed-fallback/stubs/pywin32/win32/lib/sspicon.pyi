ISSP_LEVEL: int
ISSP_MODE: int

def SEC_SUCCESS(Status: int) -> bool: ...

SECPKG_FLAG_INTEGRITY: int
SECPKG_FLAG_PRIVACY: int
SECPKG_FLAG_TOKEN_ONLY: int
SECPKG_FLAG_DATAGRAM: int
SECPKG_FLAG_CONNECTION: int
SECPKG_FLAG_MULTI_REQUIRED: int
SECPKG_FLAG_CLIENT_ONLY: int
SECPKG_FLAG_EXTENDED_ERROR: int
SECPKG_FLAG_IMPERSONATION: int
SECPKG_FLAG_ACCEPT_WIN32_NAME: int
SECPKG_FLAG_STREAM: int
SECPKG_FLAG_NEGOTIABLE: int
SECPKG_FLAG_GSS_COMPATIBLE: int
SECPKG_FLAG_LOGON: int
SECPKG_FLAG_ASCII_BUFFERS: int
SECPKG_FLAG_FRAGMENT: int
SECPKG_FLAG_MUTUAL_AUTH: int
SECPKG_FLAG_DELEGATION: int
SECPKG_FLAG_READONLY_WITH_CHECKSUM: int
SECPKG_ID_NONE: int
SECBUFFER_VERSION: int
SECBUFFER_EMPTY: int
SECBUFFER_DATA: int
SECBUFFER_TOKEN: int
SECBUFFER_PKG_PARAMS: int
SECBUFFER_MISSING: int
SECBUFFER_EXTRA: int
SECBUFFER_STREAM_TRAILER: int
SECBUFFER_STREAM_HEADER: int
SECBUFFER_NEGOTIATION_INFO: int
SECBUFFER_PADDING: int
SECBUFFER_STREAM: int
SECBUFFER_TARGET: int
SECBUFFER_CHANNEL_BINDINGS: int
SECBUFFER_ATTRMASK: int
SECBUFFER_READONLY: int
SECBUFFER_READONLY_WITH_CHECKSUM: int
SECBUFFER_RESERVED: int
SECURITY_NATIVE_DREP: int
SECURITY_NETWORK_DREP: int
SECPKG_CRED_INBOUND: int
SECPKG_CRED_OUTBOUND: int
SECPKG_CRED_BOTH: int
SECPKG_CRED_DEFAULT: int
SECPKG_CRED_RESERVED: int
ISC_REQ_DELEGATE: int
ISC_REQ_MUTUAL_AUTH: int
ISC_REQ_REPLAY_DETECT: int
ISC_REQ_SEQUENCE_DETECT: int
ISC_REQ_CONFIDENTIALITY: int
ISC_REQ_USE_SESSION_KEY: int
ISC_REQ_PROMPT_FOR_CREDS: int
ISC_REQ_USE_SUPPLIED_CREDS: int
ISC_REQ_ALLOCATE_MEMORY: int
ISC_REQ_USE_DCE_STYLE: int
ISC_REQ_DATAGRAM: int
ISC_REQ_CONNECTION: int
ISC_REQ_CALL_LEVEL: int
ISC_REQ_FRAGMENT_SUPPLIED: int
ISC_REQ_EXTENDED_ERROR: int
ISC_REQ_STREAM: int
ISC_REQ_INTEGRITY: int
ISC_REQ_IDENTIFY: int
ISC_REQ_NULL_SESSION: int
ISC_REQ_MANUAL_CRED_VALIDATION: int
ISC_REQ_RESERVED1: int
ISC_REQ_FRAGMENT_TO_FIT: int
ISC_REQ_HTTP: int
ISC_RET_DELEGATE: int
ISC_RET_MUTUAL_AUTH: int
ISC_RET_REPLAY_DETECT: int
ISC_RET_SEQUENCE_DETECT: int
ISC_RET_CONFIDENTIALITY: int
ISC_RET_USE_SESSION_KEY: int
ISC_RET_USED_COLLECTED_CREDS: int
ISC_RET_USED_SUPPLIED_CREDS: int
ISC_RET_ALLOCATED_MEMORY: int
ISC_RET_USED_DCE_STYLE: int
ISC_RET_DATAGRAM: int
ISC_RET_CONNECTION: int
ISC_RET_INTERMEDIATE_RETURN: int
ISC_RET_CALL_LEVEL: int
ISC_RET_EXTENDED_ERROR: int
ISC_RET_STREAM: int
ISC_RET_INTEGRITY: int
ISC_RET_IDENTIFY: int
ISC_RET_NULL_SESSION: int
ISC_RET_MANUAL_CRED_VALIDATION: int
ISC_RET_RESERVED1: int
ISC_RET_FRAGMENT_ONLY: int
ASC_REQ_DELEGATE: int
ASC_REQ_MUTUAL_AUTH: int
ASC_REQ_REPLAY_DETECT: int
ASC_REQ_SEQUENCE_DETECT: int
ASC_REQ_CONFIDENTIALITY: int
ASC_REQ_USE_SESSION_KEY: int
ASC_REQ_ALLOCATE_MEMORY: int
ASC_REQ_USE_DCE_STYLE: int
ASC_REQ_DATAGRAM: int
ASC_REQ_CONNECTION: int
ASC_REQ_CALL_LEVEL: int
ASC_REQ_EXTENDED_ERROR: int
ASC_REQ_STREAM: int
ASC_REQ_INTEGRITY: int
ASC_REQ_LICENSING: int
ASC_REQ_IDENTIFY: int
ASC_REQ_ALLOW_NULL_SESSION: int
ASC_REQ_ALLOW_NON_USER_LOGONS: int
ASC_REQ_ALLOW_CONTEXT_REPLAY: int
ASC_REQ_FRAGMENT_TO_FIT: int
ASC_REQ_FRAGMENT_SUPPLIED: int
ASC_REQ_NO_TOKEN: int
ASC_RET_DELEGATE: int
ASC_RET_MUTUAL_AUTH: int
ASC_RET_REPLAY_DETECT: int
ASC_RET_SEQUENCE_DETECT: int
ASC_RET_CONFIDENTIALITY: int
ASC_RET_USE_SESSION_KEY: int
ASC_RET_ALLOCATED_MEMORY: int
ASC_RET_USED_DCE_STYLE: int
ASC_RET_DATAGRAM: int
ASC_RET_CONNECTION: int
ASC_RET_CALL_LEVEL: int
ASC_RET_THIRD_LEG_FAILED: int
ASC_RET_EXTENDED_ERROR: int
ASC_RET_STREAM: int
ASC_RET_INTEGRITY: int
ASC_RET_LICENSING: int
ASC_RET_IDENTIFY: int
ASC_RET_NULL_SESSION: int
ASC_RET_ALLOW_NON_USER_LOGONS: int
ASC_RET_ALLOW_CONTEXT_REPLAY: int
ASC_RET_FRAGMENT_ONLY: int
SECPKG_CRED_ATTR_NAMES: int
SECPKG_ATTR_SIZES: int
SECPKG_ATTR_NAMES: int
SECPKG_ATTR_LIFESPAN: int
SECPKG_ATTR_DCE_INFO: int
SECPKG_ATTR_STREAM_SIZES: int
SECPKG_ATTR_KEY_INFO: int
SECPKG_ATTR_AUTHORITY: int
SECPKG_ATTR_PROTO_INFO: int
SECPKG_ATTR_PASSWORD_EXPIRY: int
SECPKG_ATTR_SESSION_KEY: int
SECPKG_ATTR_PACKAGE_INFO: int
SECPKG_ATTR_USER_FLAGS: int
SECPKG_ATTR_NEGOTIATION_INFO: int
SECPKG_ATTR_NATIVE_NAMES: int
SECPKG_ATTR_FLAGS: int
SECPKG_ATTR_USE_VALIDATED: int
SECPKG_ATTR_CREDENTIAL_NAME: int
SECPKG_ATTR_TARGET_INFORMATION: int
SECPKG_ATTR_ACCESS_TOKEN: int
SECPKG_ATTR_TARGET: int
SECPKG_ATTR_AUTHENTICATION_ID: int
SECPKG_ATTR_REMOTE_CERT_CONTEXT: int
SECPKG_ATTR_LOCAL_CERT_CONTEXT: int
SECPKG_ATTR_ROOT_STORE: int
SECPKG_ATTR_SUPPORTED_ALGS: int
SECPKG_ATTR_CIPHER_STRENGTHS: int
SECPKG_ATTR_SUPPORTED_PROTOCOLS: int
SECPKG_ATTR_CONNECTION_INFO: int
SECPKG_ATTR_EAP_KEY_BLOCK: int
SECPKG_ATTR_MAPPED_CRED_ATTR: int
SECPKG_ATTR_SESSION_INFO: int
SECPKG_ATTR_APP_DATA: int
SECPKG_NEGOTIATION_COMPLETE: int
SECPKG_NEGOTIATION_OPTIMISTIC: int
SECPKG_NEGOTIATION_IN_PROGRESS: int
SECPKG_NEGOTIATION_DIRECT: int
SECPKG_NEGOTIATION_TRY_MULTICRED: int
SECPKG_CONTEXT_EXPORT_RESET_NEW: int
SECPKG_CONTEXT_EXPORT_DELETE_OLD: int
SECQOP_WRAP_NO_ENCRYPT: int
SECURITY_ENTRYPOINT_ANSIW: str
SECURITY_ENTRYPOINT_ANSIA: str
SECURITY_ENTRYPOINT16: str
SECURITY_ENTRYPOINT: str
SECURITY_ENTRYPOINT_ANSI: str
SECURITY_SUPPORT_PROVIDER_INTERFACE_VERSION: int
SECURITY_SUPPORT_PROVIDER_INTERFACE_VERSION_2: int
SASL_OPTION_SEND_SIZE: int
SASL_OPTION_RECV_SIZE: int
SASL_OPTION_AUTHZ_STRING: int
SASL_OPTION_AUTHZ_PROCESSING: int
SEC_WINNT_AUTH_IDENTITY_ANSI: int
SEC_WINNT_AUTH_IDENTITY_UNICODE: int
SEC_WINNT_AUTH_IDENTITY_VERSION: int
SEC_WINNT_AUTH_IDENTITY_MARSHALLED: int
SEC_WINNT_AUTH_IDENTITY_ONLY: int
SECPKG_OPTIONS_TYPE_UNKNOWN: int
SECPKG_OPTIONS_TYPE_LSA: int
SECPKG_OPTIONS_TYPE_SSPI: int
SECPKG_OPTIONS_PERMANENT: int
SEC_E_INSUFFICIENT_MEMORY: int
SEC_E_INVALID_HANDLE: int
SEC_E_UNSUPPORTED_FUNCTION: int
SEC_E_TARGET_UNKNOWN: int
SEC_E_INTERNAL_ERROR: int
SEC_E_SECPKG_NOT_FOUND: int
SEC_E_NOT_OWNER: int
SEC_E_CANNOT_INSTALL: int
SEC_E_INVALID_TOKEN: int
SEC_E_CANNOT_PACK: int
SEC_E_QOP_NOT_SUPPORTED: int
SEC_E_NO_IMPERSONATION: int
SEC_E_LOGON_DENIED: int
SEC_E_UNKNOWN_CREDENTIALS: int
SEC_E_NO_CREDENTIALS: int
SEC_E_MESSAGE_ALTERED: int
SEC_E_OUT_OF_SEQUENCE: int
SEC_E_NO_AUTHENTICATING_AUTHORITY: int
SEC_I_CONTINUE_NEEDED: int
SEC_I_COMPLETE_NEEDED: int
SEC_I_COMPLETE_AND_CONTINUE: int
SEC_I_LOCAL_LOGON: int
SEC_E_BAD_PKGID: int
SEC_E_CONTEXT_EXPIRED: int
SEC_I_CONTEXT_EXPIRED: int
SEC_E_BUFFER_TOO_SMALL: int
SEC_I_RENEGOTIATE: int
SEC_E_WRONG_PRINCIPAL: int
SEC_I_NO_LSA_CONTEXT: int
SEC_E_TIME_SKEW: int
SEC_E_UNTRUSTED_ROOT: int
SEC_E_ILLEGAL_MESSAGE: int
SEC_E_CERT_UNKNOWN: int
SEC_E_CERT_EXPIRED: int
SEC_E_ENCRYPT_FAILURE: int
SEC_E_DECRYPT_FAILURE: int
SEC_E_ALGORITHM_MISMATCH: int
SEC_E_SECURITY_QOS_FAILED: int
SEC_E_UNFINISHED_CONTEXT_DELETED: int
SEC_E_NO_TGT_REPLY: int
SEC_E_NO_IP_ADDRESSES: int
SEC_E_WRONG_CREDENTIAL_HANDLE: int
SEC_E_CRYPTO_SYSTEM_INVALID: int
SEC_E_MAX_REFERRALS_EXCEEDED: int
SEC_E_MUST_BE_KDC: int
SEC_E_STRONG_CRYPTO_NOT_SUPPORTED: int
SEC_E_TOO_MANY_PRINCIPALS: int
SEC_E_NO_PA_DATA: int
SEC_E_PKINIT_NAME_MISMATCH: int
SEC_E_SMARTCARD_LOGON_REQUIRED: int
SEC_E_SHUTDOWN_IN_PROGRESS: int
SEC_E_KDC_INVALID_REQUEST: int
SEC_E_KDC_UNABLE_TO_REFER: int
SEC_E_KDC_UNKNOWN_ETYPE: int
SEC_E_UNSUPPORTED_PREAUTH: int
SEC_E_DELEGATION_REQUIRED: int
SEC_E_BAD_BINDINGS: int
SEC_E_MULTIPLE_ACCOUNTS: int
SEC_E_NO_KERB_KEY: int
ERROR_IPSEC_QM_POLICY_EXISTS: int
ERROR_IPSEC_QM_POLICY_NOT_FOUND: int
ERROR_IPSEC_QM_POLICY_IN_USE: int
ERROR_IPSEC_MM_POLICY_EXISTS: int
ERROR_IPSEC_MM_POLICY_NOT_FOUND: int
ERROR_IPSEC_MM_POLICY_IN_USE: int
ERROR_IPSEC_MM_FILTER_EXISTS: int
ERROR_IPSEC_MM_FILTER_NOT_FOUND: int
ERROR_IPSEC_TRANSPORT_FILTER_EXISTS: int
ERROR_IPSEC_TRANSPORT_FILTER_NOT_FOUND: int
ERROR_IPSEC_MM_AUTH_EXISTS: int
ERROR_IPSEC_MM_AUTH_NOT_FOUND: int
ERROR_IPSEC_MM_AUTH_IN_USE: int
ERROR_IPSEC_DEFAULT_MM_POLICY_NOT_FOUND: int
ERROR_IPSEC_DEFAULT_MM_AUTH_NOT_FOUND: int
ERROR_IPSEC_DEFAULT_QM_POLICY_NOT_FOUND: int
ERROR_IPSEC_TUNNEL_FILTER_EXISTS: int
ERROR_IPSEC_TUNNEL_FILTER_NOT_FOUND: int
ERROR_IPSEC_MM_FILTER_PENDING_DELETION: int
ERROR_IPSEC_TRANSPORT_FILTER_PENDING_DELETION: int
ERROR_IPSEC_TUNNEL_FILTER_PENDING_DELETION: int
ERROR_IPSEC_MM_POLICY_PENDING_DELETION: int
ERROR_IPSEC_MM_AUTH_PENDING_DELETION: int
ERROR_IPSEC_QM_POLICY_PENDING_DELETION: int
WARNING_IPSEC_MM_POLICY_PRUNED: int
WARNING_IPSEC_QM_POLICY_PRUNED: int
ERROR_IPSEC_IKE_NEG_STATUS_BEGIN: int
ERROR_IPSEC_IKE_AUTH_FAIL: int
ERROR_IPSEC_IKE_ATTRIB_FAIL: int
ERROR_IPSEC_IKE_NEGOTIATION_PENDING: int
ERROR_IPSEC_IKE_GENERAL_PROCESSING_ERROR: int
ERROR_IPSEC_IKE_TIMED_OUT: int
ERROR_IPSEC_IKE_NO_CERT: int
ERROR_IPSEC_IKE_SA_DELETED: int
ERROR_IPSEC_IKE_SA_REAPED: int
ERROR_IPSEC_IKE_MM_ACQUIRE_DROP: int
ERROR_IPSEC_IKE_QM_ACQUIRE_DROP: int
ERROR_IPSEC_IKE_QUEUE_DROP_MM: int
ERROR_IPSEC_IKE_QUEUE_DROP_NO_MM: int
ERROR_IPSEC_IKE_DROP_NO_RESPONSE: int
ERROR_IPSEC_IKE_MM_DELAY_DROP: int
ERROR_IPSEC_IKE_QM_DELAY_DROP: int
ERROR_IPSEC_IKE_ERROR: int
ERROR_IPSEC_IKE_CRL_FAILED: int
ERROR_IPSEC_IKE_INVALID_KEY_USAGE: int
ERROR_IPSEC_IKE_INVALID_CERT_TYPE: int
ERROR_IPSEC_IKE_NO_PRIVATE_KEY: int
ERROR_IPSEC_IKE_DH_FAIL: int
ERROR_IPSEC_IKE_INVALID_HEADER: int
ERROR_IPSEC_IKE_NO_POLICY: int
ERROR_IPSEC_IKE_INVALID_SIGNATURE: int
ERROR_IPSEC_IKE_KERBEROS_ERROR: int
ERROR_IPSEC_IKE_NO_PUBLIC_KEY: int
ERROR_IPSEC_IKE_PROCESS_ERR: int
ERROR_IPSEC_IKE_PROCESS_ERR_SA: int
ERROR_IPSEC_IKE_PROCESS_ERR_PROP: int
ERROR_IPSEC_IKE_PROCESS_ERR_TRANS: int
ERROR_IPSEC_IKE_PROCESS_ERR_KE: int
ERROR_IPSEC_IKE_PROCESS_ERR_ID: int
ERROR_IPSEC_IKE_PROCESS_ERR_CERT: int
ERROR_IPSEC_IKE_PROCESS_ERR_CERT_REQ: int
ERROR_IPSEC_IKE_PROCESS_ERR_HASH: int
ERROR_IPSEC_IKE_PROCESS_ERR_SIG: int
ERROR_IPSEC_IKE_PROCESS_ERR_NONCE: int
ERROR_IPSEC_IKE_PROCESS_ERR_NOTIFY: int
ERROR_IPSEC_IKE_PROCESS_ERR_DELETE: int
ERROR_IPSEC_IKE_PROCESS_ERR_VENDOR: int
ERROR_IPSEC_IKE_INVALID_PAYLOAD: int
ERROR_IPSEC_IKE_LOAD_SOFT_SA: int
ERROR_IPSEC_IKE_SOFT_SA_TORN_DOWN: int
ERROR_IPSEC_IKE_INVALID_COOKIE: int
ERROR_IPSEC_IKE_NO_PEER_CERT: int
ERROR_IPSEC_IKE_PEER_CRL_FAILED: int
ERROR_IPSEC_IKE_POLICY_CHANGE: int
ERROR_IPSEC_IKE_NO_MM_POLICY: int
ERROR_IPSEC_IKE_NOTCBPRIV: int
ERROR_IPSEC_IKE_SECLOADFAIL: int
ERROR_IPSEC_IKE_FAILSSPINIT: int
ERROR_IPSEC_IKE_FAILQUERYSSP: int
ERROR_IPSEC_IKE_SRVACQFAIL: int
ERROR_IPSEC_IKE_SRVQUERYCRED: int
ERROR_IPSEC_IKE_GETSPIFAIL: int
ERROR_IPSEC_IKE_INVALID_FILTER: int
ERROR_IPSEC_IKE_OUT_OF_MEMORY: int
ERROR_IPSEC_IKE_ADD_UPDATE_KEY_FAILED: int
ERROR_IPSEC_IKE_INVALID_POLICY: int
ERROR_IPSEC_IKE_UNKNOWN_DOI: int
ERROR_IPSEC_IKE_INVALID_SITUATION: int
ERROR_IPSEC_IKE_DH_FAILURE: int
ERROR_IPSEC_IKE_INVALID_GROUP: int
ERROR_IPSEC_IKE_ENCRYPT: int
ERROR_IPSEC_IKE_DECRYPT: int
ERROR_IPSEC_IKE_POLICY_MATCH: int
ERROR_IPSEC_IKE_UNSUPPORTED_ID: int
ERROR_IPSEC_IKE_INVALID_HASH: int
ERROR_IPSEC_IKE_INVALID_HASH_ALG: int
ERROR_IPSEC_IKE_INVALID_HASH_SIZE: int
ERROR_IPSEC_IKE_INVALID_ENCRYPT_ALG: int
ERROR_IPSEC_IKE_INVALID_AUTH_ALG: int
ERROR_IPSEC_IKE_INVALID_SIG: int
ERROR_IPSEC_IKE_LOAD_FAILED: int
ERROR_IPSEC_IKE_RPC_DELETE: int
ERROR_IPSEC_IKE_BENIGN_REINIT: int
ERROR_IPSEC_IKE_INVALID_RESPONDER_LIFETIME_NOTIFY: int
ERROR_IPSEC_IKE_INVALID_CERT_KEYLEN: int
ERROR_IPSEC_IKE_MM_LIMIT: int
ERROR_IPSEC_IKE_NEGOTIATION_DISABLED: int
ERROR_IPSEC_IKE_NEG_STATUS_END: int
CRYPT_E_MSG_ERROR: int
CRYPT_E_UNKNOWN_ALGO: int
CRYPT_E_OID_FORMAT: int
CRYPT_E_INVALID_MSG_TYPE: int
CRYPT_E_UNEXPECTED_ENCODING: int
CRYPT_E_AUTH_ATTR_MISSING: int
CRYPT_E_HASH_VALUE: int
CRYPT_E_INVALID_INDEX: int
CRYPT_E_ALREADY_DECRYPTED: int
CRYPT_E_NOT_DECRYPTED: int
CRYPT_E_RECIPIENT_NOT_FOUND: int
CRYPT_E_CONTROL_TYPE: int
CRYPT_E_ISSUER_SERIALNUMBER: int
CRYPT_E_SIGNER_NOT_FOUND: int
CRYPT_E_ATTRIBUTES_MISSING: int
CRYPT_E_STREAM_MSG_NOT_READY: int
CRYPT_E_STREAM_INSUFFICIENT_DATA: int
CRYPT_I_NEW_PROTECTION_REQUIRED: int
CRYPT_E_BAD_LEN: int
CRYPT_E_BAD_ENCODE: int
CRYPT_E_FILE_ERROR: int
CRYPT_E_NOT_FOUND: int
CRYPT_E_EXISTS: int
CRYPT_E_NO_PROVIDER: int
CRYPT_E_SELF_SIGNED: int
CRYPT_E_DELETED_PREV: int
CRYPT_E_NO_MATCH: int
CRYPT_E_UNEXPECTED_MSG_TYPE: int
CRYPT_E_NO_KEY_PROPERTY: int
CRYPT_E_NO_DECRYPT_CERT: int
CRYPT_E_BAD_MSG: int
CRYPT_E_NO_SIGNER: int
CRYPT_E_PENDING_CLOSE: int
CRYPT_E_REVOKED: int
CRYPT_E_NO_REVOCATION_DLL: int
CRYPT_E_NO_REVOCATION_CHECK: int
CRYPT_E_REVOCATION_OFFLINE: int
CRYPT_E_NOT_IN_REVOCATION_DATABASE: int
CRYPT_E_INVALID_NUMERIC_STRING: int
CRYPT_E_INVALID_PRINTABLE_STRING: int
CRYPT_E_INVALID_IA5_STRING: int
CRYPT_E_INVALID_X500_STRING: int
CRYPT_E_NOT_CHAR_STRING: int
CRYPT_E_FILERESIZED: int
CRYPT_E_SECURITY_SETTINGS: int
CRYPT_E_NO_VERIFY_USAGE_DLL: int
CRYPT_E_NO_VERIFY_USAGE_CHECK: int
CRYPT_E_VERIFY_USAGE_OFFLINE: int
CRYPT_E_NOT_IN_CTL: int
CRYPT_E_NO_TRUSTED_SIGNER: int
CRYPT_E_MISSING_PUBKEY_PARA: int
CRYPT_E_OSS_ERROR: int
KerbDebugRequestMessage: int
KerbQueryTicketCacheMessage: int
KerbChangeMachinePasswordMessage: int
KerbVerifyPacMessage: int
KerbRetrieveTicketMessage: int
KerbUpdateAddressesMessage: int
KerbPurgeTicketCacheMessage: int
KerbChangePasswordMessage: int
KerbRetrieveEncodedTicketMessage: int
KerbDecryptDataMessage: int
KerbAddBindingCacheEntryMessage: int
KerbSetPasswordMessage: int
KerbSetPasswordExMessage: int
KerbVerifyCredentialsMessage: int
KerbQueryTicketCacheExMessage: int
KerbPurgeTicketCacheExMessage: int
KerbRefreshSmartcardCredentialsMessage: int
KerbAddExtraCredentialsMessage: int
KerbQuerySupplementalCredentialsMessage: int
MsV1_0Lm20ChallengeRequest: int
MsV1_0Lm20GetChallengeResponse: int
MsV1_0EnumerateUsers: int
MsV1_0GetUserInfo: int
MsV1_0ReLogonUsers: int
MsV1_0ChangePassword: int
MsV1_0ChangeCachedPassword: int
MsV1_0GenericPassthrough: int
MsV1_0CacheLogon: int
MsV1_0SubAuth: int
MsV1_0DeriveCredential: int
MsV1_0CacheLookup: int
MsV1_0SetProcessOption: int
SEC_E_OK: int
SECBUFFER_MECHLIST: int
SECBUFFER_MECHLIST_SIGNATURE: int
SECPKG_ATTR_ISSUER_LIST_EX: int
SEC_E_INCOMPLETE_CREDENTIALS: int
SEC_E_INCOMPLETE_MESSAGE: int
SEC_I_INCOMPLETE_CREDENTIALS: int
