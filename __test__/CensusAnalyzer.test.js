const {test, expect } = require('@jest/globals');
const CensusAnalyzer = require('../main/CensusAnalyzer')

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

const IndiaStateCensusData = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusData.csv';
const IndiaStateCensusDataWrongFile = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusData1.csv';
const IndiaStateCensusDataWrongType = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusDataWrongType.txt';
const IndiaStateCensusDataWrongHeader = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusDataWrongHeader.csv';
const IndiaStateCensusDataWrongDelimeter =  'C:\\Users\\Manas\Desktop\\Indian-State-Census-Analyzer-Problem\\main\resources\\IndiaStateCensusDataWrongDelimeter.csv';

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

const IndiaStateCode = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCode.csv';
const IndiaStateCodeWrongFile = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCode1.csv';
const IndiaStateCodeWrongType = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCodeWrongType.txt';
const IndiaStateCodeWrongHeader = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCodeWrongHeader.csv';

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('India State Census Information Test-Cases', () => {

    test('happy testcase-Number_of_records_are_matching', () => {
        const censusAnalyzer = new CensusAnalyzer()
        return expect(censusAnalyzer.indiaStateCensusAnalyser(IndiaStateCensusData)).resolves.toBe(29);
    });

    test('sad testcase-Wrong_file', () => {
        const censusAnalyzer = new CensusAnalyzer()
        return expect(censusAnalyzer.indiaStateCensusAnalyser(IndiaStateCensusDataWrongFile)).rejects.toThrow("No Such File Exception");
    });

    test('sad testcase-Wrong_file_type', () => {
        const censusAnalyzer = new CensusAnalyzer()
        return expect(censusAnalyzer.indiaStateCensusAnalyser(IndiaStateCensusDataWrongType)).rejects.toThrow("Wrong File Type Exception");
    });

    test('sad testcase-Wrong_header', () => {
        const censusAnalyzer = new CensusAnalyzer()
        return expect(censusAnalyzer.indiaStateCensusAnalyser(IndiaStateCensusDataWrongHeader)).rejects.toThrow("Wrong Header Exception");
    });

    test('sad testcase-Wrong_delimeter', () => {
        const censusAnalyzer = new CensusAnalyzer()
        return expect(censusAnalyzer.indiaStateCensusAnalyser(IndiaStateCensusDataWrongDelimeter)).rejects.toThrow("Wrong Delimeter Exception");
    });
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('India State Code Test-Cases', () => {

    test('happy testcase-Number_of_records_are_matching', () => {
        const censusAnalyzer = new CensusAnalyzer()
        return expect(censusAnalyzer.indiaStateCodeAnalyser(IndiaStateCode)).resolves.toBe(37);
    });

    test('sad testcase-Wrong_file', () => {
        const censusAnalyzer = new CensusAnalyzer()
        return expect(censusAnalyzer.indiaStateCodeAnalyser(IndiaStateCodeWrongFile)).rejects.toThrow("No Such File Exception");
    });

    test('sad testcase-Wrong_file_type', () => {
        const censusAnalyzer = new CensusAnalyzer()
        return expect(censusAnalyzer.indiaStateCodeAnalyser(IndiaStateCodeWrongType)).rejects.toThrow("Wrong File Type Exception");
    });

    test('sad testcase-Wrong_header', () => {
        const censusAnalyzer = new CensusAnalyzer()
        return expect(censusAnalyzer.indiaStateCodeAnalyser(IndiaStateCodeWrongHeader)).rejects.toThrow("Wrong Header Exception");
    });
});