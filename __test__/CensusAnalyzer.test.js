const {test, expect } = require('@jest/globals');
const CensusAnalyzer = require('../main/CensusAnalyzer')

const IndiaStateCensusData = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusData.csv';
const IndiaStateCensusDataWrongFile = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusData1.csv';
const IndiaStateCensusDataWrongType = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusDataWrongType.txt';
const IndiaStateCensusDataWrongHeader = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusDataWrongHeader.csv';
const IndiaStateCensusDataWrongDelimiter = 'C:\\Users\\Manas\Desktop\\Indian-State-Census-Analyzer-Problem\\main\r\esources\\IndiaStateCensusDataWrongDelimiter.csv';

describe('India State Census Test-Cases', () => {

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
        return expect(censusAnalyzer.indiaStateCensusAnalyser(IndiaStateCensusDataWrongDelimiter)).rejects.toThrow("Invalid Delimeter Exception");
    });

});