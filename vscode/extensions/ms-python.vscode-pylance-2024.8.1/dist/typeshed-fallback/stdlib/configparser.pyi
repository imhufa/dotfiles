import sys
from _typeshed import StrOrBytesPath, SupportsWrite
from collections.abc import Callable, ItemsView, Iterable, Iterator, Mapping, MutableMapping, Sequence
from re import Pattern
from typing import Any, ClassVar, Final, Literal, TypeVar, overload
from typing_extensions import TypeAlias

if sys.version_info >= (3, 13):
    __all__ = (
        "NoSectionError",
        "DuplicateOptionError",
        "DuplicateSectionError",
        "NoOptionError",
        "InterpolationError",
        "InterpolationDepthError",
        "InterpolationMissingOptionError",
        "InterpolationSyntaxError",
        "ParsingError",
        "MissingSectionHeaderError",
        "ConfigParser",
        "RawConfigParser",
        "Interpolation",
        "BasicInterpolation",
        "ExtendedInterpolation",
        "SectionProxy",
        "ConverterMapping",
        "DEFAULTSECT",
        "MAX_INTERPOLATION_DEPTH",
        "UNNAMED_SECTION",
        "MultilineContinuationError",
    )
elif sys.version_info >= (3, 12):
    __all__ = (
        "NoSectionError",
        "DuplicateOptionError",
        "DuplicateSectionError",
        "NoOptionError",
        "InterpolationError",
        "InterpolationDepthError",
        "InterpolationMissingOptionError",
        "InterpolationSyntaxError",
        "ParsingError",
        "MissingSectionHeaderError",
        "ConfigParser",
        "RawConfigParser",
        "Interpolation",
        "BasicInterpolation",
        "ExtendedInterpolation",
        "LegacyInterpolation",
        "SectionProxy",
        "ConverterMapping",
        "DEFAULTSECT",
        "MAX_INTERPOLATION_DEPTH",
    )
else:
    __all__ = [
        "NoSectionError",
        "DuplicateOptionError",
        "DuplicateSectionError",
        "NoOptionError",
        "InterpolationError",
        "InterpolationDepthError",
        "InterpolationMissingOptionError",
        "InterpolationSyntaxError",
        "ParsingError",
        "MissingSectionHeaderError",
        "ConfigParser",
        "SafeConfigParser",
        "RawConfigParser",
        "Interpolation",
        "BasicInterpolation",
        "ExtendedInterpolation",
        "LegacyInterpolation",
        "SectionProxy",
        "ConverterMapping",
        "DEFAULTSECT",
        "MAX_INTERPOLATION_DEPTH",
    ]

_Section: TypeAlias = Mapping[str, str]
_Parser: TypeAlias = MutableMapping[str, _Section]
_ConverterCallback: TypeAlias = Callable[[str], Any]
_ConvertersMap: TypeAlias = dict[str, _ConverterCallback]
_T = TypeVar("_T")

DEFAULTSECT: Final = "DEFAULT"
MAX_INTERPOLATION_DEPTH: Final = 10

class Interpolation:
    def before_get(self, parser: _Parser, section: str, option: str, value: str, defaults: _Section) -> str: ...
    def before_set(self, parser: _Parser, section: str, option: str, value: str) -> str: ...
    def before_read(self, parser: _Parser, section: str, option: str, value: str) -> str: ...
    def before_write(self, parser: _Parser, section: str, option: str, value: str) -> str: ...

class BasicInterpolation(Interpolation): ...
class ExtendedInterpolation(Interpolation): ...

if sys.version_info < (3, 13):
    class LegacyInterpolation(Interpolation):
        def before_get(self, parser: _Parser, section: str, option: str, value: str, vars: _Section) -> str: ...

class RawConfigParser(_Parser):
    _SECT_TMPL: ClassVar[str]  # undocumented
    _OPT_TMPL: ClassVar[str]  # undocumented
    _OPT_NV_TMPL: ClassVar[str]  # undocumented

    SECTCRE: Pattern[str]
    OPTCRE: ClassVar[Pattern[str]]
    OPTCRE_NV: ClassVar[Pattern[str]]  # undocumented
    NONSPACECRE: ClassVar[Pattern[str]]  # undocumented

    BOOLEAN_STATES: ClassVar[Mapping[str, bool]]  # undocumented
    default_section: str
    if sys.version_info >= (3, 13):
        @overload
        def __init__(
            self,
            defaults: Mapping[str, str | None] | None = None,
            dict_type: type[Mapping[str, str]] = ...,
            *,
            allow_no_value: Literal[True],
            delimiters: Sequence[str] = ("=", ":"),
            comment_prefixes: Sequence[str] = ("#", ";"),
            inline_comment_prefixes: Sequence[str] | None = None,
            strict: bool = True,
            empty_lines_in_values: bool = True,
            default_section: str = "DEFAULT",
            interpolation: Interpolation | None = ...,
            converters: _ConvertersMap = ...,
            allow_unnamed_section: bool = False,
        ) -> None: ...
        @overload
        def __init__(
            self,
            defaults: Mapping[str, str | None] | None,
            dict_type: type[Mapping[str, str]],
            allow_no_value: Literal[True],
            *,
            delimiters: Sequence[str] = ("=", ":"),
            comment_prefixes: Sequence[str] = ("#", ";"),
            inline_comment_prefixes: Sequence[str] | None = None,
            strict: bool = True,
            empty_lines_in_values: bool = True,
            default_section: str = "DEFAULT",
            interpolation: Interpolation | None = ...,
            converters: _ConvertersMap = ...,
            allow_unnamed_section: bool = False,
        ) -> None: ...
        @overload
        def __init__(
            self,
            defaults: _Section | None = None,
            dict_type: type[Mapping[str, str]] = ...,
            allow_no_value: bool = False,
            *,
            delimiters: Sequence[str] = ("=", ":"),
            comment_prefixes: Sequence[str] = ("#", ";"),
            inline_comment_prefixes: Sequence[str] | None = None,
            strict: bool = True,
            empty_lines_in_values: bool = True,
            default_section: str = "DEFAULT",
            interpolation: Interpolation | None = ...,
            converters: _ConvertersMap = ...,
            allow_unnamed_section: bool = False,
        ) -> None: ...
    else:
        @overload
        def __init__(
            self,
            defaults: Mapping[str, str | None] | None = None,
            dict_type: type[Mapping[str, str]] = ...,
            *,
            allow_no_value: Literal[True],
            delimiters: Sequence[str] = ("=", ":"),
            comment_prefixes: Sequence[str] = ("#", ";"),
            inline_comment_prefixes: Sequence[str] | None = None,
            strict: bool = True,
            empty_lines_in_values: bool = True,
            default_section: str = "DEFAULT",
            interpolation: Interpolation | None = ...,
            converters: _ConvertersMap = ...,
        ) -> None: ...
        @overload
        def __init__(
            self,
            defaults: Mapping[str, str | None] | None,
            dict_type: type[Mapping[str, str]],
            allow_no_value: Literal[True],
            *,
            delimiters: Sequence[str] = ("=", ":"),
            comment_prefixes: Sequence[str] = ("#", ";"),
            inline_comment_prefixes: Sequence[str] | None = None,
            strict: bool = True,
            empty_lines_in_values: bool = True,
            default_section: str = "DEFAULT",
            interpolation: Interpolation | None = ...,
            converters: _ConvertersMap = ...,
        ) -> None: ...
        @overload
        def __init__(
            self,
            defaults: _Section | None = None,
            dict_type: type[Mapping[str, str]] = ...,
            allow_no_value: bool = False,
            *,
            delimiters: Sequence[str] = ("=", ":"),
            comment_prefixes: Sequence[str] = ("#", ";"),
            inline_comment_prefixes: Sequence[str] | None = None,
            strict: bool = True,
            empty_lines_in_values: bool = True,
            default_section: str = "DEFAULT",
            interpolation: Interpolation | None = ...,
            converters: _ConvertersMap = ...,
        ) -> None: ...

    def __len__(self) -> int: ...
    def __getitem__(self, key: str) -> SectionProxy: ...
    def __setitem__(self, key: str, value: _Section) -> None: ...
    def __delitem__(self, key: str) -> None: ...
    def __iter__(self) -> Iterator[str]: ...
    def __contains__(self, key: object) -> bool: ...
    def defaults(self) -> _Section: ...
    def sections(self) -> list[str]: ...
    def add_section(self, section: str) -> None: ...
    def has_section(self, section: str) -> bool: ...
    def options(self, section: str) -> list[str]: ...
    def has_option(self, section: str, option: str) -> bool: ...
    def read(self, filenames: StrOrBytesPath | Iterable[StrOrBytesPath], encoding: str | None = None) -> list[str]: ...
    def read_file(self, f: Iterable[str], source: str | None = None) -> None: ...
    def read_string(self, string: str, source: str = "<string>") -> None: ...
    def read_dict(self, dictionary: Mapping[str, Mapping[str, Any]], source: str = "<dict>") -> None: ...
    if sys.version_info < (3, 12):
        def readfp(self, fp: Iterable[str], filename: str | None = None) -> None: ...
    # These get* methods are partially applied (with the same names) in
    # SectionProxy; the stubs should be kept updated together
    @overload
    def getint(self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None) -> int: ...
    @overload
    def getint(
        self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None, fallback: _T = ...
    ) -> int | _T: ...
    @overload
    def getfloat(self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None) -> float: ...
    @overload
    def getfloat(
        self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None, fallback: _T = ...
    ) -> float | _T: ...
    @overload
    def getboolean(self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None) -> bool: ...
    @overload
    def getboolean(
        self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None, fallback: _T = ...
    ) -> bool | _T: ...
    def _get_conv(
        self,
        section: str,
        option: str,
        conv: Callable[[str], _T],
        *,
        raw: bool = False,
        vars: _Section | None = None,
        fallback: _T = ...,
    ) -> _T: ...
    # This is incompatible with MutableMapping so we ignore the type
    @overload  # type: ignore[override]
    def get(self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None) -> str | Any: ...
    @overload
    def get(
        self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None, fallback: _T
    ) -> str | _T | Any: ...
    @overload
    def items(self, *, raw: bool = False, vars: _Section | None = None) -> ItemsView[str, SectionProxy]: ...
    @overload
    def items(self, section: str, raw: bool = False, vars: _Section | None = None) -> list[tuple[str, str]]: ...
    def set(self, section: str, option: str, value: str | None = None) -> None: ...
    def write(self, fp: SupportsWrite[str], space_around_delimiters: bool = True) -> None: ...
    def remove_option(self, section: str, option: str) -> bool: ...
    def remove_section(self, section: str) -> bool: ...
    def optionxform(self, optionstr: str) -> str: ...

class ConfigParser(RawConfigParser):
    # This is incompatible with MutableMapping so we ignore the type
    @overload  # type: ignore[override]
    def get(self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None) -> str: ...
    @overload
    def get(self, section: str, option: str, *, raw: bool = False, vars: _Section | None = None, fallback: _T) -> str | _T: ...

if sys.version_info < (3, 12):
    class SafeConfigParser(ConfigParser): ...  # deprecated alias

class SectionProxy(MutableMapping[str, str]):
    def __init__(self, parser: RawConfigParser, name: str) -> None: ...
    def __getitem__(self, key: str) -> str: ...
    def __setitem__(self, key: str, value: str) -> None: ...
    def __delitem__(self, key: str) -> None: ...
    def __contains__(self, key: object) -> bool: ...
    def __len__(self) -> int: ...
    def __iter__(self) -> Iterator[str]: ...
    @property
    def parser(self) -> RawConfigParser: ...
    @property
    def name(self) -> str: ...
    def get(  # type: ignore[override]
        self,
        option: str,
        fallback: str | None = None,
        *,
        raw: bool = False,
        vars: _Section | None = None,
        _impl: Any | None = None,
        **kwargs: Any,
    ) -> str | Any: ...  # can be None in RawConfigParser's sections
    # These are partially-applied version of the methods with the same names in
    # RawConfigParser; the stubs should be kept updated together
    @overload
    def getint(self, option: str, *, raw: bool = ..., vars: _Section | None = ...) -> int: ...
    @overload
    def getint(self, option: str, fallback: _T = ..., *, raw: bool = ..., vars: _Section | None = ...) -> int | _T: ...
    @overload
    def getfloat(self, option: str, *, raw: bool = ..., vars: _Section | None = ...) -> float: ...
    @overload
    def getfloat(self, option: str, fallback: _T = ..., *, raw: bool = ..., vars: _Section | None = ...) -> float | _T: ...
    @overload
    def getboolean(self, option: str, *, raw: bool = ..., vars: _Section | None = ...) -> bool: ...
    @overload
    def getboolean(self, option: str, fallback: _T = ..., *, raw: bool = ..., vars: _Section | None = ...) -> bool | _T: ...
    # SectionProxy can have arbitrary attributes when custom converters are used
    def __getattr__(self, key: str) -> Callable[..., Any]: ...

class ConverterMapping(MutableMapping[str, _ConverterCallback | None]):
    GETTERCRE: ClassVar[Pattern[Any]]
    def __init__(self, parser: RawConfigParser) -> None: ...
    def __getitem__(self, key: str) -> _ConverterCallback: ...
    def __setitem__(self, key: str, value: _ConverterCallback | None) -> None: ...
    def __delitem__(self, key: str) -> None: ...
    def __iter__(self) -> Iterator[str]: ...
    def __len__(self) -> int: ...

class Error(Exception):
    message: str
    def __init__(self, msg: str = "") -> None: ...

class NoSectionError(Error):
    section: str
    def __init__(self, section: str) -> None: ...

class DuplicateSectionError(Error):
    section: str
    source: str | None
    lineno: int | None
    def __init__(self, section: str, source: str | None = None, lineno: int | None = None) -> None: ...

class DuplicateOptionError(Error):
    section: str
    option: str
    source: str | None
    lineno: int | None
    def __init__(self, section: str, option: str, source: str | None = None, lineno: int | None = None) -> None: ...

class NoOptionError(Error):
    section: str
    option: str
    def __init__(self, option: str, section: str) -> None: ...

class InterpolationError(Error):
    section: str
    option: str
    def __init__(self, option: str, section: str, msg: str) -> None: ...

class InterpolationDepthError(InterpolationError):
    def __init__(self, option: str, section: str, rawval: object) -> None: ...

class InterpolationMissingOptionError(InterpolationError):
    reference: str
    def __init__(self, option: str, section: str, rawval: object, reference: str) -> None: ...

class InterpolationSyntaxError(InterpolationError): ...

class ParsingError(Error):
    source: str
    errors: list[tuple[int, str]]
    if sys.version_info >= (3, 13):
        def __init__(self, source: str, *args: object) -> None: ...
        def combine(self, others: Iterable[ParsingError]) -> ParsingError: ...
    elif sys.version_info >= (3, 12):
        def __init__(self, source: str) -> None: ...
    else:
        def __init__(self, source: str | None = None, filename: str | None = None) -> None: ...

    def append(self, lineno: int, line: str) -> None: ...

class MissingSectionHeaderError(ParsingError):
    lineno: int
    line: str
    def __init__(self, filename: str, lineno: int, line: str) -> None: ...

if sys.version_info >= (3, 13):
    class _UNNAMED_SECTION: ...
    UNNAMED_SECTION: _UNNAMED_SECTION

    class MultilineContinuationError(ParsingError):
        lineno: int
        line: str
        def __init__(self, filename: str, lineno: int, line: str) -> None: ...
