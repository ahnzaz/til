# Media presentation decription(MPD) Manifest format structure

## `<MPD>`
Manifest Root element

## `<BaseUrl>`
URL의 Base directory path 명세

## `<Period>`
Scene, chapter 구분 또는 광고 영상과 본영상의 구분 등 독립적인 영상의 Root element
### Attribute
- startTime
- duration

## `<AdaptationSet>`
하나의 video/audio/texttrack 콘텐츠를 표현하는 element
<Representation> set을 가짐
- Track Set element, MediaStream set을 가짐. 비디오/오디오/자막/메타 데이터 스트림 등을 포함 가능

### Sample
```xml
<AdaptationSet mimeType="video/mp4" segmentAlignment="true" startWithSAP="1" maxWidth="1920" maxHeight="1080" maxFrameRate="30000/1001" par="1:1">
```

## `<Representation>`
동일 콘텐츠의 다른 사양을 가진 Track을 표현하는 element
해상도/비트레이트/코덱

### Sample
```xml
<Representation id="v3_257" bandwidth="2850000" codecs="avc1.4D401E" width="1280" height="720" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
```

### Attritbute
- id
- bandwidth
- codecs
- width/height
- framerate
- sar(Storage aspect ratio) : 물리적인 픽셀 종횡비
- scanType : `progressive` || `interlace`

## `<SubRepresentation>`
Representation의 특정 한 미디어 스트림에 필요한 정보를 포함.
코덱명, sampling rate, embedded 자막 등 부가적인 정보

## Media segment
SegmentList, SegmentTemplate, SegmentBase. SegmentTimeline에서 startTime, duration 기술(라이브에서 중요) 개별 파일이 될 수도, 단일 파일의 byte-range가 될 수도 있다.

## <SegmentBase>
## <SegmentTemplate>
세그먼트 파일의 주소를 template형식으로 기술

### Sample
```xml
<SegmentTemplate timescale="90000" initialization="$RepresentationID$-Header.m4s" media="$RepresentationID$-270146-i-$Number$.m4s" startNumber="1" duration="179704" presentationTimeOffset="0"/>
```

## <SegmentList>
개별 segment를 명시적으로 표현한 `<SegmentURL>` list

### Sample
```xml
<SegmentList timescale="90000" duration="5400000">
    <RepresentationIndex sourceURL="representation-index.sidx"/>
    <SegmentURL media="segment-1.ts"/>
    <SegmentURL media="segment-2.ts"/>
    <SegmentURL media="segment-3.ts"/>
    ...
</SegmentList>
```

### Attributes
- `initialization` : Header file path
- `media` : 미디어 세그먼트 주소 템플릿
- `startNumber` : segment index start number
- `duration`

## <IndexSegment>
- Representation을 위한 Index representation segment : 항상 별도 파일로 존재
- Media segment마다 Single index segment : Media segment의 byte range로 존재할 수 있음

IndexSegment는 ISOBMMF `sidx` box가 있으며 media segment duration을 time/byte 값으로 가지고 있다. 옵션으로 `sixx` box도 있다.

Representation index segment에서 `sidx` box는 차례대로 오지만, index segment 자체보다는 앞에 옵니다.

# Samples
## `<SegmentUrl>`을 사용하는 sample
```xml
<?xml version="1.0"?>
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" profiles="urn:mpeg:dash:profile:full:2011"
     minBufferTime="PT1.5S">
    <!-- Ad -->
    <Period duration="PT30S">
        <BaseURL>ad/</BaseURL>
        <!-- Everything in one Adaptation Set -->
        <AdaptationSet mimeType="video/mp2t">
            <!-- 720p Representation at 3.2 Mbps -->
            <Representation id="720p" bandwidth="3200000" width="1280" height="720">
                <!-- Just use one segment, since the ad is only 30 seconds long -->
                <BaseURL>720p.ts</BaseURL>
                <SegmentBase>
                    <RepresentationIndex sourceURL="720p.sidx"/>
                </SegmentBase>
            </Representation>
            <!-- 1080p Representation at 6.8 Mbps -->
            <Representation id="1080p" bandwidth="6800000" width="1920"
                            height="1080">
                <BaseURL>1080p.ts</BaseURL>
                <SegmentBase>
                    <RepresentationIndex sourceURL="1080p.sidx"/>
                </SegmentBase>
            </Representation>
        </AdaptationSet>
    </Period>
    <!-- Normal Content -->
    <Period duration="PT10M">
        <BaseURL>main/</BaseURL>
        <!-- Just the video -->
        <AdaptationSet mimeType="video/mp2t">
            <BaseURL>video/</BaseURL>
            <!-- 720p Representation at 3.2 Mbps -->
            <Representation id="720p" bandwidth="3200000" width="1280" height="720">
                <BaseURL>720p/</BaseURL>
                <!-- First, we'll just list all of the segments -->
                <!-- Timescale is "ticks per second", so each segment is 1 minute
                     long -->
                <SegmentList timescale="90000" duration="5400000">
                    <RepresentationIndex sourceURL="representation-index.sidx"/>
                    <SegmentURL media="segment-1.ts"/>
                    <SegmentURL media="segment-2.ts"/>
                    <SegmentURL media="segment-3.ts"/>
                    <SegmentURL media="segment-4.ts"/>
                    <SegmentURL media="segment-5.ts"/>
                    <SegmentURL media="segment-6.ts"/>
                    <SegmentURL media="segment-7.ts"/>
                    <SegmentURL media="segment-8.ts"/>
                    <SegmentURL media="segment-9.ts"/>
                    <SegmentURL media="segment-10.ts"/>
                </SegmentList>
            </Representation>
            <!-- 1080p Representation at 6.8 Mbps -->
            <Representation id="1080p" bandwidth="6800000" width="1920"
                            height="1080">
                <BaseURL>1080/</BaseURL>
                <!-- Since all of our segments have similar names, this time
                     we'll use a SegmentTemplate -->
                <SegmentTemplate media="segment-$Number$.ts" timescale="90000">
                    <RepresentationIndex sourceURL="representation-index.sidx"/>
                    <!-- Let's add a SegmentTimeline so the client can easily see
                         how many segments there are -->
                    <SegmentTimeline>
                        <!-- r is the number of repeats _after_ the first one, so
                             this reads:
                             Starting from time 0, there are 10 (9 + 1) segments
                             with a duration of (5400000 / @timescale) seconds. -->
                        <S t="0" r="9" d="5400000"/>
                    </SegmentTimeline>
                </SegmentTemplate>
            </Representation>
        </AdaptationSet>
        <!-- Just the audio -->
        <AdaptationSet mimeType="audio/mp2t">
            <BaseURL>audio/</BaseURL>
            <!-- We're just going to offer one audio representation, since audio
                 bandwidth isn't very important. -->
            <Representation id="audio" bandwidth="128000">
                <SegmentTemplate media="segment-$Number$.ts" timescale="90000">
                    <RepresentationIndex sourceURL="representation-index.sidx"/>
                    <SegmentTimeline>
                        <S t="0" r="9" d="5400000"/>
                    </SegmentTimeline>
                </SegmentTemplate>
            </Representation>
        </AdaptationSet>
    </Period>
</MPD>
```

## `<SegmentTemplate>`을 사용하는 manifest
```xml
<?xml version="1.0" encoding="UTF-8"?>
<MPD
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    xmlns:scte35="http://www.scte.org/schemas/35/2014SCTE35.xsd" xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd" profiles="urn:mpeg:dash:profile:isoff-live:2011" type="static" minBufferTime="PT5.000S" maxSegmentDuration="PT2.005S" availabilityStartTime="2016-01-20T21:10:02Z" mediaPresentationDuration="PT193.680S">
    <Period id="period0">
        <AdaptationSet mimeType="video/mp4" segmentAlignment="true" startWithSAP="1" maxWidth="1920" maxHeight="1080" maxFrameRate="30000/1001" par="1:1">
            <SegmentTemplate timescale="90000" initialization="$RepresentationID$-Header.m4s" media="$RepresentationID$-270146-i-$Number$.m4s" startNumber="1" duration="179704" presentationTimeOffset="0"/>
            <Representation id="v1_257" bandwidth="1200000" codecs="avc1.4D401E" width="768" height="432" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
            <Representation id="v2_257" bandwidth="1850000" codecs="avc1.4D401E" width="1024" height="576" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
            <Representation id="v3_257" bandwidth="2850000" codecs="avc1.4D401E" width="1280" height="720" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
            <Representation id="v4_257" bandwidth="200000" codecs="avc1.4D401E" width="320" height="180" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
            <Representation id="v5_257" bandwidth="300000" codecs="avc1.4D401E" width="320" height="180" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
            <Representation id="v6_257" bandwidth="4300000" codecs="avc1.4D401E" width="1280" height="720" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
            <Representation id="v7_257" bandwidth="5300000" codecs="avc1.4D401E" width="1920" height="1080" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
            <Representation id="v8_257" bandwidth="480000" codecs="avc1.4D401E" width="512" height="288" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
            <Representation id="v9_257" bandwidth="750000" codecs="avc1.4D401E" width="640" height="360" frameRate="30000/1001" sar="1:1" scanType="progressive"/>
        </AdaptationSet>
        <AdaptationSet mimeType="audio/mp4" segmentAlignment="true" startWithSAP="1" lang="qaa">
            <SegmentTemplate timescale="90000" initialization="$RepresentationID$-Header.m4s" media="$RepresentationID$-270146-i-$Number$.m4s" startNumber="1" duration="179704" presentationTimeOffset="0"/>
            <Representation id="v4_258" bandwidth="130800" codecs="mp4a.40.2" audioSamplingRate="48000">
                <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>
            </Representation>
        </AdaptationSet>
    </Period>
</MPD>
```