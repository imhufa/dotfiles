import datetime
from _typeshed import Incomplete
from datetime import tzinfo
from re import Pattern
from typing import Any, ClassVar, Final
from typing_extensions import TypeAlias

from .caselessdict import CaselessDict
from .parser import Parameters

_PropType: TypeAlias = type[Any]  # any of the v* classes in this file

DURATION_REGEX: Final[Pattern[str]]
WEEKDAY_RULE: Final[Pattern[str]]
ZERO: Final[datetime.timedelta]
HOUR: Final[datetime.timedelta]
STDOFFSET: Final[datetime.timedelta]
DSTOFFSET: Final[datetime.timedelta]
DSTDIFF: Final[datetime.timedelta]

class FixedOffset(tzinfo):
    def __init__(self, offset, name) -> None: ...
    def utcoffset(self, dt): ...
    def tzname(self, dt): ...
    def dst(self, dt): ...

class LocalTimezone(tzinfo):
    def utcoffset(self, dt): ...
    def dst(self, dt): ...
    def tzname(self, dt): ...

class vBinary:
    obj: Incomplete
    params: Incomplete
    def __init__(self, obj) -> None: ...
    def to_ical(self): ...
    @staticmethod
    def from_ical(ical): ...
    def __eq__(self, other): ...

class vBoolean(int):
    BOOL_MAP: Incomplete
    params: Incomplete
    def __new__(cls, *args, **kwargs): ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...

class vCalAddress(str):
    params: Incomplete
    def __new__(cls, value, encoding="utf-8"): ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...

class vFloat(float):
    params: Incomplete
    def __new__(cls, *args, **kwargs): ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...

class vInt(int):
    params: Incomplete
    def __new__(cls, *args, **kwargs): ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...

class vDDDLists:
    params: Incomplete
    dts: Incomplete
    def __init__(self, dt_list) -> None: ...
    def to_ical(self): ...
    @staticmethod
    def from_ical(ical, timezone: Incomplete | None = None): ...
    def __eq__(self, other): ...

class vCategory:
    cats: Incomplete
    params: Incomplete
    def __init__(self, c_list) -> None: ...
    def to_ical(self): ...
    @staticmethod
    def from_ical(ical): ...
    def __eq__(self, other): ...

class TimeBase:
    def __eq__(self, other): ...
    def __hash__(self): ...

class vDDDTypes(TimeBase):
    params: Incomplete
    dt: Incomplete
    def __init__(self, dt) -> None: ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical, timezone: Incomplete | None = None): ...

class vDate(TimeBase):
    dt: Incomplete
    params: Incomplete
    def __init__(self, dt) -> None: ...
    def to_ical(self): ...
    @staticmethod
    def from_ical(ical): ...

class vDatetime(TimeBase):
    dt: Incomplete
    params: Incomplete
    def __init__(self, dt) -> None: ...
    def to_ical(self): ...
    @staticmethod
    def from_ical(ical, timezone: Incomplete | None = None): ...

class vDuration(TimeBase):
    td: Incomplete
    params: Incomplete
    def __init__(self, td) -> None: ...
    def to_ical(self): ...
    @staticmethod
    def from_ical(ical): ...
    @property
    def dt(self): ...

class vPeriod(TimeBase):
    params: Incomplete
    start: Incomplete
    end: Incomplete
    by_duration: Incomplete
    duration: Incomplete
    def __init__(self, per) -> None: ...
    def overlaps(self, other): ...
    def to_ical(self): ...
    @staticmethod
    def from_ical(ical, timezone: Incomplete | None = None): ...
    @property
    def dt(self): ...

class vWeekday(str):
    week_days: Incomplete
    relative: Incomplete
    params: Incomplete
    def __new__(cls, value, encoding="utf-8"): ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...

class vFrequency(str):
    frequencies: Incomplete
    params: Incomplete
    def __new__(cls, value, encoding="utf-8"): ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...

class vRecur(CaselessDict[Incomplete]):
    frequencies: ClassVar[list[str]]
    canonical_order: ClassVar[tuple[str, ...]]
    types: ClassVar[CaselessDict[_PropType]]
    params: Parameters
    def __init__(self, *args, **kwargs) -> None: ...
    def to_ical(self): ...
    @classmethod
    def parse_type(cls, key, values): ...
    @classmethod
    def from_ical(cls, ical) -> dict[str, Incomplete]: ...

class vText(str):
    encoding: Incomplete
    params: Incomplete
    def __new__(cls, value, encoding="utf-8"): ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...

class vTime(TimeBase):
    dt: Incomplete
    params: Incomplete
    def __init__(self, *args) -> None: ...
    def to_ical(self): ...
    @staticmethod
    def from_ical(ical): ...

class vUri(str):
    params: Incomplete
    def __new__(cls, value, encoding="utf-8"): ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...

class vGeo:
    latitude: Incomplete
    longitude: Incomplete
    params: Incomplete
    def __init__(self, geo) -> None: ...
    def to_ical(self): ...
    @staticmethod
    def from_ical(ical): ...
    def __eq__(self, other): ...

class vUTCOffset:
    ignore_exceptions: bool
    td: Incomplete
    params: Incomplete
    def __init__(self, td) -> None: ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...
    def __eq__(self, other): ...

class vInline(str):
    params: Incomplete
    def __new__(cls, value, encoding="utf-8"): ...
    def to_ical(self): ...
    @classmethod
    def from_ical(cls, ical): ...

class TypesFactory(CaselessDict[_PropType]):
    all_types: tuple[_PropType, ...]
    def __init__(self, *args, **kwargs) -> None: ...
    types_map: CaselessDict[str]
    def for_property(self, name: str) -> _PropType: ...
    def to_ical(self, name: str, value) -> bytes: ...
    def from_ical(self, name: str, value): ...
