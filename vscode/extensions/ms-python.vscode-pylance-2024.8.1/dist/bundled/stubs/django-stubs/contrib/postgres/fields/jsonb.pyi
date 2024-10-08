from json import JSONEncoder
from typing import Any

from django.db.models import Field
from django.db.models.lookups import Transform

from .mixins import CheckFieldDefaultMixin

class JsonAdapter:
    encoder: Any = ...
    def __init__(
        self, adapted: Any, dumps: Any | None = ..., encoder: Any | None = ...
    ) -> None: ...
    def dumps(self, obj: Any) -> Any: ...

class JSONField(CheckFieldDefaultMixin, Field[Any, Any]):
    empty_strings_allowed: bool = ...
    description: Any = ...
    default_error_messages: Any = ...
    encoder: Any = ...
    def __init__(
        self,
        verbose_name: str | None = ...,
        name: str | None = ...,
        encoder: type[JSONEncoder] | None = ...,
        **kwargs: Any
    ) -> None: ...
    def value_to_string(self, obj: Any) -> Any: ...

class KeyTransform(Transform):
    operator: str = ...
    nested_operator: str = ...
    def __init__(self, key_name: str, *args: Any, **kwargs: Any) -> None: ...

class KeyTextTransform(KeyTransform): ...
