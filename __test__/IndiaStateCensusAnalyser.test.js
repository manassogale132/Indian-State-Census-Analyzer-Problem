const {test, expect } = require('@jest/globals');
const indiaStateCensusAnalyser = require('../main/IndiaStateCensusAnalyser')

const IndiaStateCensusData = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusData.csv';
const IndiaStateCensusDataWrongType = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusDataWrongType.txt';
const IndiaStateCensusDataWrongHeader = 'C:\\Users\\Manas\\Desktop\\Indian-State-Census-Analyzer-Problem\\main\\resources\\IndiaStateCensusDataWrongHeader.csv';
const IndiaStateCensusDataWrongDelimiter = 'C:\\Users\\Manas\Desktop\\Indian-State-Census-Analyzer-Problem\\main\r\esources\\IndiaStateCensusDataWrongDelimiter.csv';

describe('India State Census Test-Cases', () => {

    test('happy testcase-Number_of_records_are_matching', () => {
        return expect(indiaStateCensusAnalyser(IndiaStateCensusData)).resolves.toBe(29);
    });

    test('sad testcase-Wrong_file_type', () => {
        return expect(indiaStateCensusAnalyser(IndiaStateCensusDataWrongType)).rejects.toThrow("Wrong File Type Exception");
    });

    test('sad testcase-Wrong_header', () => {
        return expect(indiaStateCensusAnalyser(IndiaStateCensusDataWrongHeader)).rejects.toThrow("Wrong Header Exception");
    });

});